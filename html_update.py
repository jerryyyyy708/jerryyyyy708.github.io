import os
import re

def modify_html_files(directory):
    # Define the patterns to search for and their replacements
    pattern_div = re.compile(r'<div class="d-flex flex-column flex-shrink-0 p-3">')
    replacement_div = '<div class="d-flex flex-column flex-shrink-0 p-3 main-content">'

    # This pattern looks for <nav> tags and the corresponding </nav> tag
    pattern_nav = re.compile(r'(<nav [^>]*>.*?</nav>)', re.DOTALL)

    # Iterate over files in the specified directory
    for filename in os.listdir(directory):
        if filename.endswith('.html'):
            filepath = os.path.join(directory, filename)

            # Read the file
            with open(filepath, 'r', encoding='utf-8') as file:
                content = file.read()

            # Replace the patterns
            content = pattern_div.sub(replacement_div, content)

            # The replacement now includes the entire <nav>...</nav> block wrapped in <div id="topbar">...</div>
            content = pattern_nav.sub(r'<div id="topbar">\1</div>', content)

            # Write the changes back to the file
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(content)

# Call the function with your directory
modify_html_files('pages')
