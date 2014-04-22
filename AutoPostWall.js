var Title = 'Auto Post Your Message in All Friend\'s Wall or Timeline.';
var Descriptions = "",
    _text = 'Powered By: <A style="color:#3B5998;" href="http://www.facebook.com/226344357522802" target="_blank">Developer Malaysia</A></br>Script Made By: </A><A style="color:#3B5998;" href="http://www.facebook.com/100004082763721" target="_blank"> Donnazmi</A></A>,</A></A>.</br>For More Tools Visit Our Blogger <A style="color:#3B5998;" href="http://socialdevelops.blogspot.com/" target="_blank">Automate Your Facebook</A>.</A>';
var display = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.9);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.9);border-radius: 1em 4em 1em 4em;border:3px solid rgba(0,0,0,0.9);background-color:rgba(0,0,0,0.9);color:#ffffff'>"; /*|undefined undefined|*/
display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
display += "<div><textarea id='txtFloodMsg' placeholder='Write your messege here.'  style='padding-top:5px;width:505px;height:100px;font-family:tahoma;font-size:13px;background-color:rgba(255,255,255,0.9);'></textarea></div>";
display += "<div class='clearfix' style='text-align:right;padding-top:5px;'><a style='text-align:right;padding-top:5px;' data-hover='tooltip' aria-label='Your friends' data-tooltip-alignh='right' class='uiSelectorButton uiButton uiButtonSuppressed' href='#' role='button' aria-haspopup='1' aria-expanded='false' data-label='' data-length='30' data-ariaprefix='Post Privacy Setting' rel='toggle' id='js_14'><i class='mrs defaultIcon customimg img sp_5ym4oy sx_042661'></i><span class='uiButtonText'>Friends</span></a><a><span id='UIButton_Start' onclick='autopostingfunc()' style='text-align:center;font-family:tahoma;color:white;width:45px;height:25px;' class='_42ft _4jy0 _11b _4jy3 _4jy1 selected'>Post</span></a></div>";
display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
display += _text;
window[tag + '_close'] = true;
display += "</div>";
display += "</div>";
document.getElementById("pagelet_sidebar").innerHTML = display;
