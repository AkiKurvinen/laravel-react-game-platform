# Game accounts demo

## Template games
Template games simulate usage of common authentication API with game specific data.  
*User accounts data (e.g. userID, username, password)*
 - is saved in accounts database table
 - is accessed via common auth API  

*Game specific data (e.g. click score, box location)*
  - is saved in game specific database table e.g. button_clicker_table / box_mover_table
  - is accessed via game specific API e.g. button_clicker_api.php / box_mover_api.php 
  - is linked to user via userID (accounts table)

### Button clicker
- User clicks the button to get 1 point
- Logged in user can save the progress by pressing "save button"
- Previous score is loaded if user logs in
- Guest users (Not logged in) always start from 0
- Game automatically logs in if user is logged in on upper level on website

### Box mover
- User moves the box by dragging it
- Box location (x, y) is saved if user is logged in and presses "save button"
- Box previous location is loaded when user logs in
- Guest users (Not logged in) always start at box default location
- Game automatically logs in if user is logged in on upper level on website
