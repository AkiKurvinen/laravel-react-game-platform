<?php
$data = 'Box Mover API Response';
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);

// GET
/*
    SELECT box_x, box_y
    FROM boxes_table
    WHERE user_id = 42
*/

/*
    SELECT box_x, box_y, user_id
    FROM boxes_table
    INNER JOIN ... user_id ...
    LIMIT 10;
*/

// PUT
/*
    UPDATE boxes_table
    SET box_x = 300, box_y = 400
    WHERE user_id = 42; 
*/
