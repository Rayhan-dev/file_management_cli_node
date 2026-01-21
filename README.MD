#   File System Command Listener (Node.js)

A lightweight Node.js tool that lets you control your file system by writing simple English commands into a text file.
Whenever command.txt changes, this program reads it and performs the requested file operation automatically.

##  What This Project Does

This app continuously watches a file called command.txt and executes commands written inside it, such as:

Creating files

Deleting files

Renaming files

Adding content to files

It’s basically a file-system bot powered by Node.js.

##  Features

Live file watching using fs.watch

Create files

Delete files

Rename files

Append text to files

Uses Node.js fs/promises API

Works in real time without restarting



##  Setup
1. Install Node.js

    Make sure you have Node.js installed (v16+ recommended).

    Check: node -v

2. Clone the repository
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name

3. Create the command file
    touch command.txt

4. Run the program
    node index.js


The app will now start watching command.txt.

##  How to Use

Open command.txt and type one of the following commands, then save the file.

1️⃣ Create a file
create a file test.txt

2️⃣ Delete a file
delete the file test.txt

3️⃣ Rename a file
rename the file old.txt to new.txt

4️⃣ Add content to a file
add to the file notes.txt this content: Hello from Node.js!


Each time you save command.txt, the program reads it and executes the command.



##  Important Notes

The tool reads the entire file, so only one command should exist at a time.

Commands must follow the exact format shown above.

File paths can be relative or absolute.


