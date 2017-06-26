<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Don Chad's Table Example</title>

    <!-- Bootstrap -->
    <!--link href="../css/bootstrap.min.css" rel="stylesheet"-->
    <!-- Don Style-->
    <link href="../css/don-main.css" rel="stylesheet">
    <script type="text/javascript" src="../js/jquery.js"></script>
    <script type="text/javascript" src="../js/hamburger-js.js"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <ul class="nav-menu">
    <li class="hamburger-li">
        <div class="hamburger-menu-container">
          <div class="hamburger-menu-line"></div>
          <div class="hamburger-menu-line"></div>
          <div class="hamburger-menu-line"></div>
          <div class="hamburger-menu-line"></div>
          <div class="hamburger-menu-line"></div>
        </div>
      </li>
      <div class="nav-menu-center-container">
        <li class="nav-menu-li">Home</li>
        <li class="nav-menu-li">Projects</li>
        <li class="nav-menu-li">About</li>
        <li class="nav-menu-li">Contact</li>
      </div>
    </ul>
    <div class="topcenter">
      <table class="table-style-1">
        <thead class="thead-style-1">
          <tr>
            <th>Coffee Brand</th>
            <th>Coffee Flavour</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody class="tbody-style-1">
          <tr>
            <td>Tim Horton's</td>
            <td><a href="http://www.timhortons.com/ca/en/menu/dark-roast.php" target="_new">Dark Roast</a></td>
            <td>6/10</td>
          </tr>
          <tr>
            <td>McDonald's</td>
            <td><a href="http://www4.mcdonalds.ca/mccafe_eng/" target="_new">Premium Roast</a></td>
            <td>8/10</td>
          </tr>
          <tr>
            <td>Timothy's</td>
            <td><a href="http://www.timothys.ca/products/coffee-k-cup-packs-midnight-magic-extra-bold.php" target="_new">Midnight Magic</a></td>
            <td>7/10</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>