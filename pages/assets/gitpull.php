<?php

    if($_POST['payload']){
        // error_log('git WEBHOOK received!');
        // shell_exec('cd ~/public_html && git pull origin master');
        exec('cd ~/public_html && git pull origin main'.' 2>&1', $output, $return_var);
        var_dump($output);
    }
    else {
        error_log('git WEBHOOK not received.');
    }

?>