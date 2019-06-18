<?php

Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');

// Route::resource('task', 'TaskController');
