<?php
// Describe your component
$componentMeta = [
    'title' => '<%= moduleName.replace('-', '_') %>',
    'status' => 'wip',
    'visible' => true,
    'type' => 'c',
    'path' => '<%= pathOptions.path %><%= moduleName.replace('-', '_') %>/',
    'description' => '<%= moduleName.replace('-', '_') %> Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => '<%= moduleName.replace('-', '_') %>',
    'status' => '',
    'description' => '<%= moduleName.replace('-', '_') %> Description goes here…',
    'cn' => 'c-<%= moduleName.replace('-', '_') %>',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'variant' => 'basic',
    'foo' => null,
];

return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        '<%= moduleName.replace('-', '_') %>' => array_merge($defaultVariant, []),
        /*
        '<%= moduleName.replace('-', '_') %>--variantName' => array_merge($defaultVariant, [
            'title' => '<%= moduleName.replace('-', '_') %> Intro',
            'description' => '<%= moduleName.replace('-', '_') %> Description goes here…',
            'modifiers' => [],
'variant' => 'basic',
        ]),
        */
    ]
];
