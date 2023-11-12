import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect('projects.db')
cursor = conn.cursor()

# Add the new column
cursor.execute("ALTER TABLE projects ADD COLUMN visible BOOLEAN DEFAULT TRUE")

# Commit the changes and close the connection
conn.commit()
conn.close()
