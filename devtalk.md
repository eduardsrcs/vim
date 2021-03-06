# [Vim 01 - Основы](https://www.youtube.com/watch?v=zNnsNtBF80g)

3 modes: Insert text mode, command mode and visual mode,

In command mode keys grouped in three sections: motion, commands, operatioins. 

# [Vim 02 - Конфигурация и плагины](https://www.youtube.com/watch?v=VPENostK_3w)

## Config

`.vimrc`

```vim
set number
set expandtab
set tabstop=2

set hlsearch
set incsearch
```

## Plugins

### Plugin managers

#### [Vundle.vim](https://github.com/VundleVim/Vundle.vim) 

[Vundle](http://github.com/VundleVim/Vundle.vim) is short for *Vim bundle* and is a [Vim](http://www.vim.org/) plugin manager.

#### [pathogen](https://github.com/tpope/vim-pathogen)

#### [vim-plug](https://github.com/junegunn/vim-plug)

##### Installation

```
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

`.vimrc`

```
call plug#begin('~/.vim/plugged')

Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }

call plug#end()
set number
set expandtab
set tabstop=2

"Mappings                  

map <C-n> :NERDTreeToggle<CR>

```

after this reread config:

```
:source ~/.vimrc
```

then

```
:PlugInstall
```

After this, `ctrl` `n` and enter will open explorer :)

##### Plugins

[YouCompleteMe](https://github.com/ycm-core/YouCompleteMe). [4:00](https://www.youtube.com/watch?v=pIcLJc85RDc&t=240s) YouCompleteMe is a fast, as-you-type, fuzzy-search code completion, comprehension and refactoring engine for [Vim](https://www.vim.org/). It has several completion engines built in and supports any protocol-compliant Language Server, so can work with practically any language.

[pfficial ycm page on github](https://github.com/ycm-core/YouCompleteMe#installation)

Solution in Ubuntu 20/Debian:
`apt-get install python3-dev cmake`

Install ycm with 'Vim-plug' using Plug 'ycm-core/YouCompleteMe'

1. cd ~/.vim/plugged/YouCompleteMe
2. brew install cmake 
3. python3 install.py --all && python3 install.py --ts-completer

###### vim YouCompleteMe: ERROR: Python headers are missing in /usr/include/python2.7.

solution:

```
$ apt-get install python-dev
```

- maybe another solution: [ycm-core/YouCompleteMe#2729](https://github.com/ycm-core/YouCompleteMe/issues/2729)

```sh
sudo apt-get remove cmake 
sudo apt-get update 
sudo apt-get upgrade 
sudo apt-get install cmake3
```

[Auto-pairs](https://github.com/jiangmiao/auto-pairs) &mdash; Insert or delete brackets, parents, quotes in pair.

[fugitive.vim](https://github.com/tpope/vim-fugitive). Fugitive is the premier Vim plugin for Git. Or maybe it's the premier Git plugin for Vim? Either way, it's "so awesome, it should be illegal". That's why it's called Fugitive.

[vim-gitgutter](https://github.com/airblade/vim-gitgutter). A Vim plugin which shows a git diff in the sign column. It shows which lines have been added, modified, or removed. You can also preview, stage, and undo individual hunks; and stage partial hunks. The plugin also provides a hunk text object.

[ctrlp.vim](https://github.com/ctrlpvim/ctrlp.vim). ull path fuzzy **file**, **buffer**, **mru**, **tag**, **...** finder for Vim.

[vim-easymotion](https://github.com/easymotion/vim-easymotion). EasyMotion provides a much simpler way to use some motions in vim. It takes the `<number>` out of `<number>w` or `<number>f{char}` by highlighting all possible choices and allowing you to press one key to jump directly to the target.

`.vimrc`

```
call plug#begin('~/.vim/plugged')

Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
Plug 'Valloric/YouCompleteMe'
Plug 'jiangmiao/auto-pairs'         
Plug 'tpope/vim-fugitive' 
Plug 'airblade/vim-gitgutter'       
Plug 'ctrlpvim/ctrlp.vim'
Plug 'easymotion/vim-easymotion'
" Color schemes
Plug 'morhetz/gruvbox'

call plug#end()

syntax on
colorscheme gruvbox
set background=dark

let g:mapleader=','

set number
set expandtab
set tabstop=2

"Mappings

map <C-n> :NERDTreeToggle<CR>
map <Leader> <Plug>(easymotion-prefix)

```

# [Vim 04 - Окна](https://www.youtube.com/watch?v=7Jtr66Kx0RA&t=29s)

Split vertically: `ctrl` `w` `n` 
Switch to **Nerdtree**: `ctrl` `w` `h`, this means move to the left...

Move window: `ctrl` `w` `shift` `k`

To close window, go to it and exit as usual.

Close all windows: `ctrl` `w` `q` 

### Open Window from nerdtree

Just press `i` or `s` when on file in nerdtree.

### Make key bindings for new windows

```
map <silent> <C-h> :call WinMove('h')<CR>
map <silent> <C-j> :call WinMove('j')<CR>
map <silent> <C-k> :call WinMove('k')<CR>
map <silent> <C-l> :call WinMove('l')<CR>


function! WinMove(key)
  let t:curwin = winnr()
  exec "wincmd ".a:key
  if (t:curwin == winnr())
    if (match(a:key, '[jk]'))
      wincmd v
    else
      wincmd s
    endif
    exec "wincmd ".a:key
  endif
endfunction
```

# [Vim 05 - Поиск и навигация](https://www.youtube.com/watch?v=uBb9Z0hsNuY)

## Find something

### In file

`f` finds symbol in line. `f` `e` finds first "e" symbol in this line, `;` goes to the next that symbol

`t` does same but places cursor before symbol 

`F` searches symbol in backward direction
`T` does the same as `t` in backward

`/` searches whole phrase. **Note** that `.` must be escaped, because regexp...

`*` jumps over all the same words

[time 8:00](https://www.youtube.com/watch?v=uBb9Z0hsNuY&t=480s)

### Search in files

#### :vimgrep

```
:vimgrep def *
```

means find def in all files inside this directory. To move over results, use **:cnext** or **:cprev** command.

#### :grep

this is wrapper over system grep.  So, grep must be installed in system.

```
:grep def *
```

just outputs list of files where it found *def*

### [ag.vim](https://github.com/rking/ag.vim)

'rking/ag.vim'

```
:Ag def ./
```

search def inside  this directiry

## Remove highlight

```
:noh
```

## Navigation

### Go to line

`line number` `g` `g` 

```
12gg
```

---

`. moves caret to the last edit point

to create mark to return to it press `m` `any lowercase key`, this creates local mark. To create global mark use UPPERCASE letter.

`m` `p` creates mark called 'p', to move to it press **`** and **p**

### Go to file, which link is under cursor

`g` `f` 

## Delete part of line 

`d` `t` `symbol`, such as `'` 

# [Lesson 6. Vim + Termux](https://www.youtube.com/watch?v=hXAEUUsvMA0&t=1s)

vertical split

`ctrl` `b` `%`

horizontal split

`ctrl` `b` `"`

[time 2:30](https://www.youtube.com/watch?v=hXAEUUsvMA0&t=150s)

Tmux allows us to open multiple windows, in one we can run commands, in another we can work in vim. 

`~/.tmux.conf`

```.conf
set -g default-terminal "screen-256color"
set-option -g prefix C-q
set -g mouse on

bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R

bind -r H resize-pane -L 10
bind -r J resize-pane -D 10
bind -r K resize-pane -U 10
bind -r L resize-pane -R 10

set history-limit 500

bind-key -T root PPage if-shell -F "#{alternate_on}" "send-keys PPage" "copy-mode -e; send-keys PPage"
bind-key -t vi-copy PPage page-up
bind-key -t vi-copy NPage page-down

bind -T root WheelUpPane if-shell -F -t = "#{alternate_on}" "select-pane -t =; send-keys -M" "select-pane -t =; copy-mode -e; send-keys -M"
bind -T root WheelDownPane if-shell -F -t = "#{alternate_on}" "select-pane -t =; send-keys -M" "select-pane -t =; send-keys -M"
bind-key -t vi-copy WheelUpPane halfpage-up
bind-key -t vi-copy WheelDownPane halfpage-down

set -sg escape-time 0
```

this allows us to use `ctrl` `q` as command key and:

`h` move to left window...

and so on

`H` ... move border between windows, and so on

## Sessions

rename session

`ctrl` `b` + `$`

return to `hello` session

```
tmux attach -t hello
```

Sessions allow multiple users work in one environment.

# [Lesson 7. Neovim](https://www.youtube.com/watch?v=NmHuu3UjQ7k)

[Home page](https://neovim.io)



