# [Openvim.com](https://www.openvim.com)

Vim has two modes: Insert and normal.

In insert mode press `esc` to go to normal mode. From normal mode press `i` to go to insert mode.

## Get started

### Moves

`h` - left
`j` - down
`l` - right
`k` - up
`w` - start of next word
`e` - end of the word
`b` - begin of the word
`0` - move to begin of line
`$` - move to end of line
`g` `g` take to the *beginning* of the file, while `G` to the *end*
`3` `G` takes to the *line 3*
`A` moves cursor to the end of line and enters INSERT mode
`G` moves cursor to the end of file



*A s*hort list of motions:*
    *w - until the start of the next word, EXCLUDING its first character.*
    *e - to the end of the current word, INCLUDING the last character.*
    $ - to the end of the line, INCLUDING the last character.*

### Repeating

`3w` - same as 3 times pressed `w`

`3` `i` `h` `e` `l` `l` `o` `esc` gives **helohelohelo**

### Find

`f` `o` finds next **o**, `F` `o` finds previous **o**, `3` `f` `u` will find **3rd u**.

`*` finds next matching word, `#` finds previous

`/` text `enter` searches for a text, `n` moves to the next occurence, `N` previous...

### Search text

`/`word will find first **word**, `n` goes to **next**, and `N` moves to **previous** occurency

### Remove searched highlight

[Vim clear last search highlighting](https://stackoverflow.com/questions/657447/vim-clear-last-search-highlighting)

`:noh` 

### Replacing text

`:` `s` /thee/the will replace first occurence, but
`:` `s` /thee/the/g replaces all cases

To change every occurrence of a character string between two lines,
     type   :#,#s/old/new/g    where #,# are the line numbers of the range
                               of lines where the substitution is to be done.
     Type   :%s/old/new/g      to change every occurrence in the whole file.
     Type   :%s/old/new/gc     to find every occurrence in the whole file,
                               with a prompt whether to substitute or not.

### Matching brackets

`%` jumps to matching bracket.

### Write text in a new line

use `o` or `O` to start typing in a new line in **insert mode**

#### Insert file into text

`:` `r` *file* will place file into cursor position

#### Insert external command result

`:` `r` ` ` `!` `ls` will place ls command result in text

### Copy line

`V` `y` `p`

### Copy multiple lines

`V` ``j/k` `y`

#### insert

 `p`

### Move line

You can move a line, or a block of lines, with the `:m` command. Examples:

| `:m 12`   | move current line to after line 12                           |
| --------- | ------------------------------------------------------------ |
| `:m 0`    | move current line to before first line                       |
| `:m $`    | move current line to after last line                         |
| `:m 'a`   | move current line to after line with mark `a` (see [using marks](https://vim.fandom.com/wiki/Using_marks)) |
| `:m 'a-1` | move current line to before line with mark `a`               |
| `:m '}-1` | move current line to the end of the current paragraph        |

For clarity, a space is shown after the `:m` commands above, but that space is not required.

To move a block of lines, use the same command but visually select the lines before entering the move command. You can also use arbitrary [ranges](https://vim.fandom.com/wiki/Ranges) with the move command. Examples:

| `:5,7m 21`   | move lines 5, 6 and 7 to after line 21                 |
| ------------ | ------------------------------------------------------ |
| `:5,7m 0`    | move lines 5, 6 and 7 to before first line             |
| `:5,7m $`    | move lines 5, 6 and 7 to after last line               |
| `:.,.+4m 21` | move 5 lines starting at current line to after line 21 |
| `:,+4m14`    | same (`.` for current line is assumed)                 |

[more examples](https://vim.fandom.com/wiki/Moving_lines_up_or_down)

### Delete text

`x` deletes symbol under cursor, but `X` deletes on the left.

`d` is a delete command. `d` `w` will delete first word to the right of the cursor, `d` `2` `e` will delete 2 words to the right

`d` `w` deletes word to the right

`d` `$` deletes to the line end

`d` `a` `w` will delete word

`d` `3` `w` will delete 3 words

`d` `d` deletes whole line

`2` `d` `d` will delete two lines

`d` `i` `'` deletes all inside single quotes

`p` commands puts deleted line after current line

`c` useful for correct part of word: `c` `e` deletes word part to the end and goes into INSERT mode

`c` `i` `'` deletes all inside single quotes and inserts into INSERT mode.

### Replace one symbol

`r` enters replace by one symbol mode, `r` `k` will place k to cursor position

### Repeat command

`.` repeats last command

### Undo command

`u` undoes last command, `U` fixes whole line

### Visual mode

`v` `w` `d` will enter visual mode, select word, and delete it

### Save, quit and other...

`:` `w` filename

`v` movement :w file &mdash; saves selected part of text to file

`w` `:` save
`:` `w` `q` save and quit 
`:` `q` quit
`:` `q` `!` quit without saving

`u` undo

`ctrl` `r` redo

### Cursor location and file status

`ctrl` `g` shows current line, count of lines, percentage and cursor position

### Execute external command

`:` `!` command `enter`



# [Mастер-класс по VIM](https://www.youtube.com/watch?v=YPbUF-HtXGI&t=37s)

[time 16](https://www.youtube.com/watch?v=YPbUF-HtXGI&t=960s)

`:Vex` open file explorer

[time 22:25](https://www.youtube.com/watch?v=YPbUF-HtXGI&t=1345s)

```sh
npm init -y
npm i jest jest-cli
vim package.json
```

in vim

```js
:vert new src/maybe.js
```

this opens new file window.

```sh
touch src/maybe.js src/maybe.test.js
```

go to [this page](https://github.com/fantasyland/fantasy-land) and imagine about monad implementation.

![monada](test/dependencies.png?raw=true)

[time 25:35](https://www.youtube.com/watch?v=YPbUF-HtXGI&t=1535s)

[time 33:30](https://www.youtube.com/watch?v=YPbUF-HtXGI&t=2010s)

# Использование Vim

[часть 1](https://www.youtube.com/watch?v=BeB5iN9ztL0)

move cursor down 17 lines: `17j`
delete word: `dw` (?)
search another word like on which cursor is placed: `*`
open file with filename on which cursor is placed: `gf`
change uppercase to lowercase: `:%!tr 'A-Z' 'a-z'`, on first 10 lines: `:1,20!tr 'A-Z' 'a-z' `

Open new document: `:e filename`
Open help: `:help`
`i` inserts text before cursor, `a` &mdash; after.
`I` moves cursor to line start, `A` to line end, and enters insert mode.
`s` deletes symbol under cursor and enters insert node, `S` removes all the line and enters insert mode too.
`r` is user do replace one symbol.
`R` replaces symbols one by one
`^` moves cursor to line begin, `$` &mdash; to line end
`G` go to file end
`3G`  go to line 3
`H`, `M`, `L` &mdash; move to top, middle, low part of viewport.
[part 2](https://www.youtube.com/watch?v=R9aJYGH5qyo)
insert tag: m[A-Za-z]
go to tag: '[A-Za-z]
`y`, `d`, `c` &mdash;  (yank, delete, change)
`yy`, `dd`, `cc` &mdash; copy line, cut line, cut line and enter insert mode
`p` pastes after, `P` before...

`:53,79d` deletes lines from 53 to 79

### Buffers

`"ayw` &mdash; copy word to buffer a

To see buffers, type `:registers`

`C-v` selects rectangular blocks!

### Undo, Redo

`u`, `C-r`

### Search

`/`, `n`, `N`.

### Replace

`:s/asd/ASD/` replaces in this line, `:%s/asd/ASD/` in entire file but first one, `:%s/asd/ASD/g` globally, `:%s/asd/ASD/gi` globally, ignore case, `:53,59s/asd/ASD/g` on lines 53 to 59, `:/tag/,/untag/s/asd/ASD/g` between tag and untag .

[part 3](https://www.youtube.com/watch?v=ySlWW9Q84Cs)

### Exit

`:q`, `:q!`, `:wq` <=> `ZZ`

insert file: `:r filename`
`:r !calc`

`:qa!` exit all windows with no save

### Split

`C-w v`, `C-w s` `:e filename` `C-w arrows` 

Help: `:help windows`

#### New tab

`:tabnew`, `:tabnew filename`

#### Switch tabs:

`:tabn`, `:tabp`

### Settings

`set` shows allsettings

`set smartcase` searches Uppercase without lowercase, all rest as usual

`set ignorecase` ignores case

`set ro` opens file in readonly mode

`:help options`

### Abbreviations

`:iab cl sonsole.log()`

### FTP

```sh
vim ftp://..
```

or in vim:

`:Nread ftp://...`

`:help netrv-urls`

~/.netrc ???

`:help netrv-start`

### Fold

`set folmethod=indent` `zo`, `zc`

`:help folding`

### Key mappings

`~/.vimrc`

```
nmap <F10> zfa{
nmap <F11> zO
```

### Macros

`qa` this starts macros writing

`gUL` macros text, here change to uppercase

`w` continue writing macros

`q` macrs write end.

`@a` run macros a

# VIMTUTOR



  1. To delete from the cursor up to the next word type:    dw
  2. To delete from the cursor to the end of a line type:    d$
  3. To delete a whole line type:    dd

  4. To repeat a motion prepend it with a number:   2w
  5. The format for a change command is:
               operator   [number]   motion
     where:
       operator - is what to do, such as  d  for delete
       [number] - is an optional count to repeat the motion
       motion   - moves over the text to operate on, such as  w (word),
                  $ (to the end of line), etc.

  6. To move to the start of the line use a zero:  0

  7. To undo previous actions, type:           u  (lowercase u)
     To undo all the changes on a line, type:  U  (capital U)
     To undo the undo's, type:                 CTRL-R

## Lesson 4 SUMMARY


  1. CTRL-G  displays your location in the file and the file status.
             G  moves to the end of the file.
     number  G  moves to that line number.
            gg  moves to the first line.

  2. Typing  /  followed by a phrase searches FORWARD for the phrase.
     Typing  ?  followed by a phrase searches BACKWARD for the phrase.
     After a search type  n  to find the next occurrence in the same direction
     or  N  to search in the opposite direction.
     CTRL-O takes you back to older positions, CTRL-I to newer positions.

  3. Typing  %  while the cursor is on a (,),[,],{, or } goes to its match.

  4. To substitute new for the first old in a line type    :s/old/new
     To substitute new for all 'old's on a line type       :s/old/new/g
     To substitute phrases between two line #'s type       :#,#s/old/new/g
     To substitute all occurrences in the file type        :%s/old/new/g
     To ask for confirmation each time add 'c'             :%s/old/new/gc

### Lesson 5 SUMMARY


  1.  :!command  executes an external command.

      Some useful examples are:
         (Windows)        (Unix)
          :!dir            :!ls            -  shows a directory listing.
          :!del FILENAME   :!rm FILENAME   -  removes file FILENAME.

  2.  :w FILENAME  writes the current Vim file to disk with name FILENAME.

  3.  v  motion  :w FILENAME  saves the Visually selected lines in file
      FILENAME.

  4.  :r FILENAME  retrieves disk file FILENAME and puts it below the
      cursor position.

  5.  :r !dir  reads the output of the dir command and puts it below the
      cursor position.

Ended on line 733 (733g)s