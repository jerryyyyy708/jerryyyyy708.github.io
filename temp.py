import sqlite3
import argparse

def update_page_value_by_title(db_path, title_value, page_value):
    """Update the 'Page' value based on a given 'Title'."""
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute("UPDATE projects SET Title = ? WHERE Title = ?", (page_value, title_value))
    conn.commit()
    conn.close()
    print(f"Updated 'Page' value to '{page_value}' for project titled '{title_value}'!")


db_path = 'projects.db'
#titles = ['Android Song Writer', 'Sketch Converter', 'VST Plugin', 'NYCU CS Project', 'YT Data Analysis']
#htmls = ['android.html', 'sketch.html', 'vst.html', 'fyp.html', 'YT_vis.html']
update_page_value_by_title(db_path, 'Audio Converter VST', 'VST Plugin')
# for i in range(len(titles)):
#     update_page_value_by_title(db_path, titles[i], htmls[i])