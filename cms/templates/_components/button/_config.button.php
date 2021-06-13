<?php
return [
    'meta' => [
        'title' => 'Button', // Should be the parent Folder Name where the Config is found
    ],
    'variants' => [
        'button-primary' => [ // The Variant Name from the Component
            'status' => 'none', // From gonzo.php config file
            'visible' => true, // Render or not Render
            'text' => 'Click',
            'variant' => 'primary',
            'url' => '#',
            'style' => 'primary',
            'icon' => 'arrow-right',
            'reverse' => false,
        ],
        'button-secondary' => [ // The Variant Name from the Component
            'status' => 'none', // From gonzo.php config file
            'visible' => true, // Render or not Render
            'text' => 'Click',
            'variant' => 'secondary',
            'url' => '#',
            'style' => 'primary',
            'icon' => 'arrow-right',
            'reverse' => false,
        ],
    ]
];