<!DOCTYPE html>
<html class="h-full bg-white">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="shortcut icon" href="https://mygrainexchange.com/favicon.ico">
    @vite(['resources/js/app.js','resources/css/app.scss'])
    @inertiaHead
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body class="h-full">
@inertia
</body>
</html>
