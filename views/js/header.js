let header= document.querySelector(".header");
let main= document.getElementsByTagName('main')[0];

if(theme_key==2){
    header.innerHTML="<div class=\"parent\">\n" +
        "    <div class=\"top-bar\">\n" +
        "        <div class=\"container-fluid\">\n" +
        "            <div class=\"box\">\n" +
        "                <div class=\"right-box\">\n" +
        "                    <div class=\"item\">\n" +
        "                        <i class=\"fa-brands fa-facebook-square\"></i>\n" +
        "                    </div>\n" +
        "                    <div class=\"item\">\n" +
        "                        <i class=\"fa-brands fa-instagram\"></i>\n" +
        "                    </div>\n" +
        "                    <div class=\"item\">\n" +
        "                        <i class=\"fa-brands fa-twitter-square\"></i>\n" +
        "                    </div>\n" +
        "                    <div class=\"item\">\n" +
        "                        <i class=\"fa-brands fa-linkedin\"></i>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"left-box\">\n" +
        "                    <div class=\"item\">\n" +
        "                        <span>20123456789+</span>\n" +
        "                        <i class=\"fa-solid fa-phone\"></i>\n" +
        "                    </div>\n" +
        "                    <div class=\"item\">\n" +
        "                        <span>example@gmail.com</span>\n" +
        "                        <i class=\"fa-solid fa-envelope\"></i>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <nav class=\"navbar navbar-expand-lg navbar-light nav1\">\n" +
        "        <div class=\"container-fluid nav-mar\">\n" +
        "            <a class=\"navbar-brand\" href=\"home2.html\"\n" +
        "            ><img src=\"img/logo2.png\" alt=\"\" />\n" +
        "                <span>دكان</span></a\n" +
        "            >\n" +
        "            <div\n" +
        "                    class=\"collapse navbar-collapse\"\n" +
        "                    id=\"navbarSupportedContent\"\n" +
        "            >\n" +
        "                <ul class=\"navbar-nav ml-auto mb-2 mb-lg-0\">\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link active\" aria-current=\"page\" href=\"categories.html\"\n" +
        "                        >جميع الفئات</a\n" +
        "                        >\n" +
        "                    </li>\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link\" href=\"#\"> الموضة</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link\" href=\"#\">السوبر ماركت</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link\" href=\"#\">العطور</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link\" href=\"#\">موبايلات</a>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "                <div class=\"nav-icon\">\n" +
        "                     <span class=\"shopping\"\n" +
        "                     ><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n" +
        "                     </span>\n" +
        "                    <a href=\"login.html\">\n" +
        "                        تسجيل\n" +
        "                        <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>\n" +
        "                    </a>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <form class=\"d-flex\">\n" +
        "                <input\n" +
        "                        class=\"form-control me-2 searchInput\"\n" +
        "                        type=\"search\"\n" +
        "                        placeholder=\"ابحث هنا\"\n" +
        "                        aria-label=\"Search\"\n" +
        "                />\n" +
        "                <!-- <button class=\"btn btn-outline-success\" type=\"submit\">Search</button> -->\n" +
        "            </form>\n" +
        "\n" +
        "            <div class=\"nav-icon lol\">\n" +
        "                  <span class=\"shopping\"\n" +
        "                  ><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n" +
        "                  </span>\n" +
        "                <a href=\"login.html\">\n" +
        "                    تسجيل\n" +
        "                    <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>\n" +
        "                </a>\n" +
        "            </div>\n" +
        "\n" +
        "            <button\n" +
        "                    class=\"navbar-toggler\"\n" +
        "                    type=\"button\"\n" +
        "                    data-bs-toggle=\"collapse\"\n" +
        "                    data-bs-target=\"#navbarSupportedContent\"\n" +
        "                    aria-controls=\"navbarSupportedContent\"\n" +
        "                    aria-expanded=\"false\"\n" +
        "                    aria-label=\"Toggle navigation\"\n" +
        "            >\n" +
        "                <i class=\"fa-solid fa-bars\"></i>\n" +
        "            </button>\n" +
        "        </div>\n" +
        "    </nav>\n" +
        "</div>";
        main.style="margin-top: 10rem";
}else if(theme_key==1){
    header.innerHTML="<div class=\"parent\">\n" +
        "    <div class=\"top-bar\">\n" +
        "        <div class=\"container-fluid\">\n" +
        "            <div class=\"box\">\n" +
        "                <div class=\"right-box\">\n" +
        "                    <div class=\"item\">\n" +
        "                        <span>20123456789+</span>\n" +
        "                        <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n" +
        "                    </div>\n" +
        "                    <div class=\"item\">\n" +
        "                        <span>example123@gmail.com</span>\n" +
        "                        <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"left-box\">\n" +
        "                    <div class=\"item\">\n" +
        "                        <span>تتبع شحنتك</span>\n" +
        "                        <i class=\"fa-solid fa-truck-plane\"></i>\n" +
        "                    </div>\n" +
        "                    <div class=\"item\">\n" +
        "                        <span>أماكن الفروع</span>\n" +
        "                        <i class=\"fa fa-location-dot\" aria-hidden=\"true\"></i>\n" +
        "                    </div>\n" +
        "                    <div class=\"features\">\n" +
        "                        <div class=\"item\">\n" +
        "                            <span>العربية</span>\n" +
        "                            <i\n" +
        "                                    class=\"fa-solid fa-sort-down abs\"\n" +
        "                                    aria-hidden=\"true\"\n" +
        "                            ></i>\n" +
        "                        </div>\n" +
        "                        <div class=\"item\">\n" +
        "                            <i\n" +
        "                                    class=\"fa-solid fa-sort-down abs\"\n" +
        "                                    aria-hidden=\"true\"\n" +
        "                            ></i>\n" +
        "\n" +
        "                            <span>EGP</span>\n" +
        "                            <i class=\"fa-solid fa-coins\"></i>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <nav class=\"navbar navbar-expand-lg navbar-light nav2\">\n" +
        "        <div class=\"container-fluid\">\n" +
        "            <a class=\"navbar-brand\" href=\"#\"\n" +
        "            ><img src=\"img/logo.png\" alt=\"\" />\n" +
        "                <span>دكان</span></a\n" +
        "            >\n" +
        "            <form class=\"d-flex\">\n" +
        "                <input\n" +
        "                        class=\"form-control me-2\"\n" +
        "                        type=\"search\"\n" +
        "                        placeholder=\"ابحث هنا\"\n" +
        "                        aria-label=\"Search\"\n" +
        "                />\n" +
        "                <!-- <button class=\"btn btn-outline-success\" type=\"submit\">Search</button> -->\n" +
        "            </form>\n" +
        "            <div class=\"nav-icon lol\">\n" +
        "                <span><i class=\"fa fa-sliders\" aria-hidden=\"true\"></i></span>\n" +
        "                <span class=\"shopping\"\n" +
        "                ><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n" +
        "                  </span>\n" +
        "                <a href=\"login.html\">\n" +
        "                    تسجيل\n" +
        "                    <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>\n" +
        "                </a>\n" +
        "            </div>\n" +
        "            <div\n" +
        "                    class=\"collapse navbar-collapse\"\n" +
        "                    id=\"navbarSupportedContent\"\n" +
        "            >\n" +
        "                <ul class=\"navbar-nav ml-auto mb-2 mb-lg-0\">\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link active\" aria-current=\"page\" href=\"categories.html\"\n" +
        "                        >جميع الفئات</a\n" +
        "                        >\n" +
        "                    </li>\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link\" href=\"#\"> الموضة</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link\" href=\"#\">السوبر ماركت</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link\" href=\"#\">العطور</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link\" href=\"#\">موبايلات</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link\" href=\"#\">الالكترونيات</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link\" href=\"#\">الاجهزة المنزلية</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link\" href=\"#\">العاب الكترونية</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link\" href=\"#\">عروض اليوم</a>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "                <div class=\"nav-icon\">\n" +
        "                     <span\n" +
        "                     ><i class=\"fa fa-sliders\" aria-hidden=\"true\"></i\n" +
        "                     ></span>\n" +
        "                    <span class=\"shopping\"\n" +
        "                    ><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n" +
        "                     </span>\n" +
        "                    <a href=\"login.html\">\n" +
        "                        تسجيل\n" +
        "                        <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>\n" +
        "                    </a>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <button\n" +
        "                    class=\"navbar-toggler\"\n" +
        "                    type=\"button\"\n" +
        "                    data-bs-toggle=\"collapse\"\n" +
        "                    data-bs-target=\"#navbarSupportedContent\"\n" +
        "                    aria-controls=\"navbarSupportedContent\"\n" +
        "                    aria-expanded=\"false\"\n" +
        "                    aria-label=\"Toggle navigation\"\n" +
        "            >\n" +
        "                <i class=\"fa-solid fa-bars\"></i>\n" +
        "            </button>\n" +
        "        </div>\n" +
        "    </nav>\n" +
        "</div>";
     main.style="margin-top: 12rem";
}