<?php
$data = 'Button Clicker API Response';
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);

// GET
/*
    SELECT click_count
    FROM button_clicker_table
    WHERE user_id = 42
*/

/*
    SELECT click_count, user_id
    FROM button_clicker_table
    INNER JOIN ... user_id ...
    ORDER BY click_count;
    LIMIT 10
*/

// PUT
/*
    UPDATE button_clicker_table
    SET click_count = 999
    WHERE user_id = 42; 
*/
