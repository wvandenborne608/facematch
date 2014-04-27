<?php
  error_reporting(E_ERROR);

  $intFaceWidth  = 49;
  $intFaceHeight = 49;
  $intTileWidth  = 55;
  $intTileHeight = 55;


  require 'config.php';
  require 'facebook_api/facebook.php';

  $facebook = new Facebook(array(
    'appId'  => FACEBOOK_APP_ID,
    'secret' => FACEBOOK_SECRET_KEY,
  ));

  $user = $facebook->getUser(); // Get User ID

  if ($user) {
    try {
      $user_profile = $facebook->api('/me');
    } catch (FacebookApiException $e) {
      error_log($e);
      $user = null;
    }
  }

  $arFriends = $facebook->api(array( // use FQL to get profile pictures
    'method' => 'fql.query',
    'query' => 'SELECT pic_square FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me())'
  ));


  function make_seed() {
    list($usec, $sec) = explode(' ', microtime());
    return (float) $sec + ((float) $usec * 100000);
  }
  srand(make_seed());

  if (is_array($arFriends)) { //if there were results, then prepare a new array with 7 random profile pictures.
    $arRandomFriendsKeys = array_rand($arFriends, 9);
    $arFaces = array();
    foreach ($arRandomFriendsKeys as $key => $value) {
      $arFaces[] = $arFriends[$value]['pic_square'];
    }
  }

  $strDefaultImagePath="assets/img/pieces.png";
  $imgDefault = imageCreateFromPng($strDefaultImagePath);

  $i=0;
  foreach($arFaces as $strFaceImagePath) {
    $ext = pathinfo($strFaceImagePath, PATHINFO_EXTENSION);
    $imgFace = false;
    switch ($ext) {
      case "png":
        $imgFace = imagecreatefrompng($strFaceImagePath);
        break;
      case "jpg":
        $imgFace = imagecreatefromjpeg($strFaceImagePath);
        break;
      case "gif":
        $imgFace = imagecreatefromgif($strFaceImagePath);
        break;
    }
    if ($ext!=false) {
      list($imgFaceWidth, $imgFaceHeight) = getimagesize($strFaceImagePath); //get original face (image) dimensions
      $imgTemp = imagecreatetruecolor($intFaceWidth, $intFaceHeight); //create a new temporary image for the scaled down face
      imagecopyresampled($imgTemp, $imgFace, 0, 0, 0, 0, $intFaceWidth, $intFaceHeight, $imgFaceWidth, $imgFaceHeight);
      imagecopy($imgDefault, $imgTemp, ($i*$intTileWidth) + (($intTileWidth-$intFaceWidth)/2), (0*$intTileHeight) + (($intTileHeight-$intFaceWidth)/2), 0, 0, $intFaceHeight, $intFaceHeight);
      imagecopy($imgDefault, $imgTemp, ($i*$intTileWidth) + (($intTileWidth-$intFaceWidth)/2), (1*$intTileHeight) + (($intTileHeight-$intFaceWidth)/2), 0, 0, $intFaceHeight, $intFaceHeight);
      imagecopy($imgDefault, $imgTemp, ($i*$intTileWidth) + (($intTileWidth-$intFaceWidth)/2), (2*$intTileHeight) + (($intTileHeight-$intFaceWidth)/2), 0, 0, $intFaceHeight, $intFaceHeight);
      imagecopy($imgDefault, $imgTemp, ($i*$intTileWidth) + (($intTileWidth-$intFaceWidth)/2), (3*$intTileHeight) + (($intTileHeight-$intFaceWidth)/2), 0, 0, $intFaceHeight, $intFaceHeight);
      imagedestroy($imgTemp);
      imagedestroy($imgFace);
      $i++;
    }
  } 

  /* Output image to browser */
  header("Content-type: image/png");
  imagePng($imgDefault); 
?>
