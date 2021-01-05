# Vim web resources

## [**Moving lines up or down**](https://vim.fandom.com/wiki/Moving_lines_up_or_down)

### Cut and paste

Cut the line that you want to move by typing `dd`, or visually select some lines (press `V` then move the cursor) and type `d` to cut the selected block.

### Move command

You can move a line, or a block of lines, with the `:m` command. Examples:

| `:m 12`   | move current line to after line 12                           |
| --------- | ------------------------------------------------------------ |
| `:m 0`    | move current line to before first line                       |
| `:m $`    | move current line to after last line                         |
| `:m 'a`   | move current line to after line with mark `a` (see [using marks](https://vim.fandom.com/wiki/Using_marks)) |
| `:m 'a-1` | move current line to before line with mark `a`               |
| `:m '}-1` | move current line to the end of the current paragraph        |

| `:,+4m14` | same (`.` for current line is assumed) |
| --------- | -------------------------------------- |
|           |                                        |

## Reordering up to nine lines[edit](https://vim.fandom.com/wiki/Moving_lines_up_or_down?veaction=edit&section=3) | [edit source](https://vim.fandom.com/wiki/Moving_lines_up_or_down?section=3&veaction=editsource)

The following example lines can be moved to a different order by deleting each line in turn (starting with the line that will be first when the move is complete):

```
line 3
line 9
line 8
line 1
line 5
line 7
line 2
line 6
line 4
```

Move the cursor to "line 1" and type `dd` to delete the line. Go to "line 2" and press `.` to repeat (delete another line). Repeat this on "line 3", and so on, until everything has been deleted in order.

Now type `"1P` to paste the contents of register 1 before the cursor.

Repeat with the dot command, eight times:

```
........
```

The first dot command pastes register 2, and the next pastes register 3, and so on. The result is that all the lines are pasted, in the correct order.

You have to press `.` eight times (using a count like `8.` will insert the same line eight times). See [:help redo-register](http://vimdoc.sourceforge.net/cgi-bin/help?tag=redo-register)

## [xmledit : A filetype plugin to help edit XML, HTML, and SGML documents](https://www.vim.org/scripts/script.php?script_id=301)

This script provides some convenience when editing XML (and some SGML including
HTML) formated documents. It allows you to jump to the beginning or end of the
tag block your cursor is in. '%' will jump between '<' and '>' within the tag
your cursor is in. When in insert mode and you finish a tag (pressing '>') the
tag will be completed. If you press '>' twice it will complete the tag and
place the cursor in the middle of the tags on it's own line.

For the latest development snapshot visit  http://github.com/sukima/xmledit/