Hello and welcome to another entry in “Know your linux” series. This time let’s talk about Linux’s permissions. Should we dive right in? 🏄‍♂️

Before we do ✋ Make sure to checkout the second [entry](http://bassemmohamed.me/post/know-your-linux-02-know-your-commands) in the series.

## User’s categories :

Each file in linux has 3 categories of users to which permissions apply to.

1. **User**: The file’s owner user, normally that is the user that created the file.
2. **Group**: All of users that are member of the file’s owner group, normally that is the primary group of the owner user.
3. **Other**: All other users on the system that are not the owner user and are not members of the owner group.

## Types of permissions :

Each user category can have 3 types of permissions. Those permissions could mean different things depending on whether they are applied to a file or a directory.

1. **Read** (r) : On a file, It means that the file’s content could be read. On a directory, It means that the directory’s content could be listed.
2. **Write** (w) : On a file, It means that the file’s content could be changed. On a directory, It means that you can create or delete any file inside this directory.
3. **Execute** (x) : On a file, It means that the file could be executed. On a directory, It means that the directory’s content can be accessed.

There are some other special permissions that I won’t be covering today.

For now, thats all! Yeah!! 🎉 It is that simple. Thats all you need to know when it comes to linux’s file permissions. Want to see an example? 🤔

### Let’s see it in action :

Running the _ls -l_ command which is a list directory contents command with *-l* option for long listing format, provides much more info about each file.

[](https://www.notion.so/0490a7e1cb5a4291a20865537b76c904#9cfda20ea4864de98b6cd72727cbad0d)

Each line is a file or a directory. You can see its name in the last column. But what are those first 4 columns?

- The first column “*-rwr—r—“* is the actual permissions for that file. We will be discussing it in a minute.
- The second column is the number of hard links each file have. This is irrelevant to today’s topic.
- The third column is the name of the file’s owner user.
- The fourth column is the name of the file’s owner group.

As you can tell by the image above. The _index.php_ file is owned by the user *www-data* and its owner group is _www-data_.

The *www-data* user is not an actual human user, This is a user created for and used by the web server process. It is used to limit the server’s access and permissions. In linux every service must have a user to run under.

Now lets discuss the first column in detail. As you can see here _“-rwxrwxrwx”._ This string is actually composed of 4 substrings.

- The first bit determines the file type “-“ for a hard link (file), “d” is for a directory and “l” is a soft link (shortcut)
- The next 3 bits determines the permissions for the owner user, “rwx” means that he has all permissions.
- The next 3 bits determines the permissions for the owner group, again “r-x” means that everyone in that group has _read, execute_ but not _write_.
- The next 3 bits determines the permissions for every other user that is not the owner user or is not in the owner group, “r—” means that he has *read* but not _write_ or _execute._

That’s all from my side. ✋

If you enjoyed the post, please let me know and stay tuned for the next entry. 🙄

As always,

**Happy coding 🔥🔥**

“**كود بسعادة”**
