import sqlite3
import argparse

def insert_into_projects(db_path, title, description, language, status):
    """Insert a new row into the 'projects' table."""
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY,
        Title TEXT NOT NULL,
        Description TEXT,
        Language TEXT,
        Status TEXT
    )
    ''')

    conn.commit()
    # Insert the data into the table
    cursor.execute("INSERT INTO projects (Title, Description, Language, Status) VALUES (?, ?, ?, ?)",
                   (title, description, language, status))
    
    # Commit changes and close the connection
    conn.commit()
    conn.close()

    print(f"Row inserted successfully!")

def main():
    # Set up argument parsing
    parser = argparse.ArgumentParser(description="Insert a new row into the 'projects' table in the specified database.")
    parser.add_argument("--db_path", "-p", default='projects.db', type=str, help="Path to the SQLite database file.")
    parser.add_argument("--title", "-t", type=str, help="Title of the project.")
    parser.add_argument("--description", '-d', type=str, help="Description of the project.")
    parser.add_argument("--language", '-l', type=str, help="Programming language of the project.")
    parser.add_argument("--status", '-s', type=str, help="Status of the project.")

    # Parse the arguments
    args = parser.parse_args()

    # Insert the data into the database
    insert_into_projects(args.db_path, args.title, args.description, args.language, args.status)

if __name__ == "__main__":
    main()