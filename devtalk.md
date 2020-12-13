# Links

[Vim Awesome](vimawesome.com)

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
  1 call plug#begin('~/.vim/plugged')
  2                            
  3 Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
  4 
  5 call plug#end()            
  6 
  7 set number                 
  8 set expandtab              
  9 set tabstop=2              
 10 
 11 "Mappings                  
 12 
 13 map <C-n> :NERDTreeToggle<CR>

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

[Auto-pairs](https://github.com/jiangmiao/auto-pairs) &mdash; Insert or delete brackets, parens, quotes in pair.

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

`f` finds symbol in line. `f` `e` finds first "e" symbol in this line, `;` goes to the next that symbol

`t` does same but places cursor before symbol

`/` searches whole phrase. **Note** that `.` must be escaped, because regexp...

`*` jumps over all tha same words





