(function () {
    "use strict";

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );
        },
    };

    var mobileMenuOutsideClick = function () {
        $(document).click(function (e) {
            var container = $("#colorlib-offcanvas, .js-colorlib-nav-toggle");
            if (
                !container.is(e.target) &&
                container.has(e.target).length === 0
            ) {
                if ($("body").hasClass("offcanvas")) {
                    $("body").removeClass("offcanvas");
                    $(".js-colorlib-nav-toggle").removeClass("active");
                }
            }
        });
    };

    var offcanvasMenu = function () {
        $("#page").prepend('<div id="colorlib-offcanvas" />');
        $("#page").prepend(
            '<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white"><i></i></a>'
        );
        var clone1 = $(".menu-1 > ul").clone();
        $("#colorlib-offcanvas").append(clone1);
        var clone2 = $(".menu-2 > ul").clone();
        $("#colorlib-offcanvas").append(clone2);

        $("#colorlib-offcanvas .has-dropdown").addClass(
            "offcanvas-has-dropdown"
        );
        $("#colorlib-offcanvas").find("li").removeClass("has-dropdown");

        // Hover dropdown menu on mobile
        $(".offcanvas-has-dropdown")
            .mouseenter(function () {
                var $this = $(this);

                $this
                    .addClass("active")
                    .find("ul")
                    .slideDown(500, "easeOutExpo");
            })
            .mouseleave(function () {
                var $this = $(this);
                $this
                    .removeClass("active")
                    .find("ul")
                    .slideUp(500, "easeOutExpo");
            });

        $(window).resize(function () {
            if ($("body").hasClass("offcanvas")) {
                $("body").removeClass("offcanvas");
                $(".js-colorlib-nav-toggle").removeClass("active");
            }
        });
    };

    var burgerMenu = function () {
        $("body").on("click", ".js-colorlib-nav-toggle", function (event) {
            var $this = $(this);

            if ($("body").hasClass("overflow offcanvas")) {
                $("body").removeClass("overflow offcanvas");
            } else {
                $("body").addClass("overflow offcanvas");
            }
            $this.toggleClass("active");
            event.preventDefault();
        });
    };

    var contentWayPoint = function () {
        var i = 0;
        $(".animate-box").waypoint(
            function (direction) {
                if (
                    direction === "down" &&
                    !$(this.element).hasClass("animated-fast")
                ) {
                    i++;

                    $(this.element).addClass("item-animate");
                    setTimeout(function () {
                        $("body .animate-box.item-animate").each(function (k) {
                            var el = $(this);
                            setTimeout(
                                function () {
                                    var effect = el.data("animate-effect");
                                    if (effect === "fadeIn") {
                                        el.addClass("fadeIn animated-fast");
                                    } else if (effect === "fadeInLeft") {
                                        el.addClass("fadeInLeft animated-fast");
                                    } else if (effect === "fadeInRight") {
                                        el.addClass(
                                            "fadeInRight animated-fast"
                                        );
                                    } else {
                                        el.addClass("fadeInUp animated-fast");
                                    }

                                    el.removeClass("item-animate");
                                },
                                k * 200,
                                "easeInOutExpo"
                            );
                        });
                    }, 100);
                }
            },
            { offset: "85%" }
        );
    };

    var dropdown = function () {
        $(".has-dropdown")
            .mouseenter(function () {
                var $this = $(this);
                $this
                    .find(".dropdown")
                    .css("display", "block")
                    .addClass("animated-fast fadeInUpMenu");
            })
            .mouseleave(function () {
                var $this = $(this);

                $this
                    .find(".dropdown")
                    .css("display", "none")
                    .removeClass("animated-fast fadeInUpMenu");
            });
    };

    var goToTop = function () {
        $(".js-gotop").on("click", function (event) {
            event.preventDefault();

            $("html, body").animate(
                {
                    scrollTop: $("html").offset().top,
                },
                500,
                "easeInOutExpo"
            );

            return false;
        });

        $(window).scroll(function () {
            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $(".js-top").addClass("active");
            } else {
                $(".js-top").removeClass("active");
            }
        });
    };

    // var increment = function(){

    // };

    // Loading page
    var loaderPage = function () {
        $(".colorlib-loader").fadeOut("slow");
    };

    var sliderMain = function () {
        $("#colorlib-hero .flexslider").flexslider({
            animation: "fade",
            slideshowSpeed: 5000,
            directionNav: true,
            start: function () {
                setTimeout(function () {
                    $(".slider-text").removeClass("animated fadeInUp");
                    $(".flex-active-slide")
                        .find(".slider-text")
                        .addClass("animated fadeInUp");
                }, 500);
            },
            before: function () {
                setTimeout(function () {
                    $(".slider-text").removeClass("animated fadeInUp");
                    $(".flex-active-slide")
                        .find(".slider-text")
                        .addClass("animated fadeInUp");
                }, 500);
            },
        });
    };

    // Owl Carousel
    var owlCrouselFeatureSlide = function () {
        var owl = $(".owl-carousel");
        owl.owlCarousel({
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            autoplay: false,
            autoplayHoverPause: true,
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoHeight: false,
            items: 1,
            navText: [
                "<i class='icon-chevron-left owl-direction'></i>",
                "<i class='icon-chevron-right owl-direction'></i>",
            ],
        });

        var owl2 = $(".owl-carousel2");
        owl2.owlCarousel({
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            autoplay: true,
            autoplayHoverPause: true,
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoHeight: true,
            items: 1,
            navText: [
                "<i class='icon-chevron-left owl-direction'></i>",
                "<i class='icon-chevron-right owl-direction'></i>",
            ],
        });
    };

    var parallax = function () {
        if (!isMobile.any()) {
            $(window).stellar({
                horizontalScrolling: false,
                hideDistantElements: false,
                responsive: true,
            });
        }
    };

    var datePicker = function () {
        // jQuery('#time').timepicker();
        jQuery(".date").datepicker({
            format: "m/d/yyyy",
            autoclose: true,
        });
    };

    $(function () {
        mobileMenuOutsideClick();
        offcanvasMenu();
        burgerMenu();
        contentWayPoint();
        sliderMain();
        dropdown();
        goToTop();
        loaderPage();
        owlCrouselFeatureSlide();
        parallax();
        datePicker();
    });
})();

// get all product
let formatter = new Intl.NumberFormat("vi-VN");

const ApiProduct = "http://localhost:3000/products";

fetch(ApiProduct)
    .then((response) => response.json())
    .then((data) => {
        let html = "";
        data.map((item) => {
            html += `
				<div class="col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="./pages/product-detail.html?id=${item.id}&cate_id=${
                item.cate_id
            }" class="prod-img">
								<img src="${
                                    item.image
                                }" class="img-fluid" alt="Free html5 bootstrap 4 template">
							</a>
							<div class="desc">
								<h2><a class="nameproduct" href="./pages/product-detail.html?id=${
                                    item.id
                                }&cate_id=${item.cate_id}">${item.name}</a></h2>
								<span class="price">${formatter.format(item.price)}VND</span>
							</div>
						</div>
					</div>
				`;
        });
        const root = document.getElementById("listProduct");
        if (root) {
            root.insertAdjacentHTML("afterbegin", html);
        }
    })
    .catch((error) => console.error("Error:", error));

// get one product
const getproduct = (id, cate_id) => {
    const apiproduct = `http://localhost:3000/products?id=${id}`;
    // console.log(apiproduct);
    fetch(apiproduct)
        .then((response) => response.json())
        .then((data) => {
            let html = "";
            data.map((item) => {
                let { id, name, cate_id, price, description, image } = item;
                let newdata = { id, name, cate_id, price, description, image };

                console.log(
                    "đây là dữ liệu product" + id,
                    name,
                    cate_id,
                    price,
                    description
                );
                html += `
				<div class="product-desc">
						
				<h3>${item.name}</h3>
				<p class="price">
					<span>${formatter.format(item.price)}VND</span> 
					<span class="rate">
						<i class="icon-star-full"></i>
						<i class="icon-star-full"></i>
						<i class="icon-star-full"></i>
						<i class="icon-star-full"></i>
						<i class="icon-star-half"></i>
						(74 Rating)
					</span>
				</p>
				<table class="table caption-top">
					
				
					<tbody>
					  <tr>
						<th scope="row">${cate_id == 1 ? "Dung Lượng" : " Ổ Cứng "}</th>
						<td>${
                            cate_id == 1
                                ? item.description.capacity
                                : item.description.hard_drive
                        }</td>
						
					  </tr>
					  <tr>
					  <th scope="row">${cate_id == 1 ? "Chip" : " Cpu "} </th>
					  <td>${cate_id == 1 ? item.description.chip : item.description.cpu}</td>
					  
					</tr>
				    <tr>
					  <th scope="row">RAM </th>
					  <td>${item.description.ram}</td>
					  
					</tr>
					<tr>
					<th scope="row">${cate_id == 1 ? "Pin" : " Trọng lượng "} </th>
					<td>${cate_id == 1 ? item.description.pin : item.description.weight}</td>
					
				  </tr>
				  <tr>
					<th scope="row">Màn Hình </th>
					<td>${item.description.screen}</td>
					
				  </tr>
				
					</tbody>
				  </table>
		 <div class="input-group mb-4">
			 <span class="input-group-btn">
				<button type="button" class="quantity-left-minus btn"  data-type="minus" data-field="">
			   <i class="icon-minus2"></i>
				</button>
				</span>
			 <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="100">
			 <span class="input-group-btn ml-1">
				<button type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
				 <i class="icon-plus2"></i>
			 </button>
			 </span>
		  </div>
		  <div class="row">
			  <div class="col-sm-12 text-center">
			  		
						<p class="addtocart"><button   onclick="cart('${id}')"  class="btn btn-primary btn-addtocart btncart"><i class="icon-shopping-cart"></i> Thêm giỏ hàng</button></p>
					</div>
				</div>

				
			</div> 
			`;
            });
            let htmlalbumproduct = "";
            data.map((item) => {
                htmlalbumproduct += `			
						<div class="owl-item active">
							<div class="item">
								<div class="product-entry border">
									<a href="#" class="prod-img">
										<img src="${item.album.img1}" class="img-fluid" alt="Free html5 bootstrap 4 template">
									</a>
								</div>
							</div>
							</div>
						
						
			`;
            });

            const rootlistalbum = document.querySelector(".list_album");
            if (rootlistalbum) {
                rootlistalbum.insertAdjacentHTML(
                    "afterbegin",
                    htmlalbumproduct
                );
            }
            const root = document.querySelector(".info_product");
            if (root) {
                root.insertAdjacentHTML("afterbegin", html);
            }
        })
        .then((data) => {})
        .catch((error) => console.error("Error:", error));
};
// get productExtended
const ProductExtend = (cate_id) => {
    const rootListProductDetail = document.querySelector(".ListProductDetail");
    let HTML = "";
    axios
        .get(`http://localhost:3000/products?cate_id=${cate_id}`)
        .then((data) => {
            data.data.map((item) => {
                HTML += `<div class="col-md-3 col-lg-3 mb-4 text-center">
                <div class="product-entry border">
                    <a href="#" class="prod-img">
                        <img src="${
                            item.image
                        }" class="img-fluid" alt="Free html5 bootstrap 4 template">
                    </a>
                    <div class="desc">
                        <h2><a href="#">${item.name}</a></h2>
                        <span class="price">${formatter.format(
                            item.price
                        )} VND</span>
                    </div>
                </div>
            </div>`;
            });
            console.log(HTML);
            if (rootListProductDetail) {
                rootListProductDetail.insertAdjacentHTML("afterbegin", HTML);
            }
        });
};

// get url
const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get("id");
const cate_id = urlParams.get("cate_id");

getproduct(id, cate_id);
ProductExtend(cate_id);

// handler cart add
// localStorage.clear();
let ProductIncart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
let totalProduct = 0;
let quantityTotalProduct = 0;
let priceFlowProduct = 0;
const cart = (id) => {
    console.log(id);

    axios
        .get(`http://localhost:3000/products/${id}`)
        .then((res) => {
            console.log(res);
            if (res.status === 200) {
                checkProduct = ProductIncart.some((value) => value.id === id);
                console.log(checkProduct);
                if (!checkProduct) {
                    ProductIncart.unshift({
                        ...res.data,
                        quantity: 1,
                    });
                } else {
                    ProductIncart = ProductIncart.map((value) => {
                        if (value.id === id) {
                            value.quantity++;
                        }
                        return value;
                    });
                }
                localStorage.setItem("cart", JSON.stringify(ProductIncart));
                location.href = "./cart.html";
            } else {
                throw new Error("Network response was not ok");
            }
        })
        .catch((err) => console.log(err));
};
// render cart
(() => {
    quantityTotalProduct = ProductIncart.reduce((accountTotal, item) => {
        return (quantityTotalProduct += item.quantity);
    }, 0);
    totalProduct = ProductIncart.reduce((accountTotal, item) => {
        if (item.quantity) {
            return (totalProduct += item.price * item.quantity);
        }
    }, 0);

    let rootcart = document.querySelector(".listCart");
    let html = "";
    let listCart = ProductIncart.map((item) => {
        priceFlowProduct = item.price * item.quantity;
        html += `
        <div class="product-cart d-flex">
							<div class="one-forth">
								<div class="product-img" style="background-image: url(${item.image});">
								</div>
								<div class="display-tc">
									<h3>${item.name}</h3>
								</div>
							</div>
							<div class="one-eight text-center">
								<div class="display-tc">
									<span class="price">${formatter.format(item.price)} VND</span>
								</div>
							</div>
							<div class="one-eight text-center">
								<div class="display-tc">
									<input type="text" id="quantity" name="quantity" class="form-control input-number text-center" value="${
                                        item.quantity
                                    }" min="1" max="100">
								</div>
							</div>
							<div class="one-eight text-center">
								<div class="display-tc">
									<span class="price">${formatter.format(priceFlowProduct)} VND</span>
								</div>
							</div>
							<div class="one-eight text-center">
								<div class="display-tc">
									<button onclick="removeCart(${item.id})" class="closed"></button>
								</div>
							</div>
						</div>
        `;
    });
    let roottotalProduct = document.getElementById("totalProduct");
    if (roottotalProduct) {
        roottotalProduct.insertAdjacentHTML(
            "afterbegin",
            formatter.format(totalProduct)
        );
    }
    if (rootcart) {
        rootcart.insertAdjacentHTML("afterend", html);
    }
})();

// handler remove cart
const removeCart = (id) => {
    let indexcart = ProductIncart.findIndex((item) => {
        return item.id == id;
    });

    let updatedCart = [...ProductIncart];

    updatedCart.splice(indexcart, 1);
    console.log(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    location.reload();
};
// check out render product
(() => {
    const listCheckOutProduct = document.querySelector(".listCheckOutProduct");
    let HTML = "";
    ProductIncart.map((item) => {
        console.log(item);
        HTML += `<li><span>${item.name} <strong>x${
            item.quantity
        }</strong> </span>  <span>${formatter.format(
            item.price
        )}VND</span></li>`;
    });

    let totalCheckOut = document.querySelector(".totalCheckOut");
    if (totalCheckOut) {
        totalCheckOut.insertAdjacentHTML(
            "afterbegin",
            formatter.format(totalProduct)
        );
    }
    if (listCheckOutProduct) {
        listCheckOutProduct.insertAdjacentHTML("afterbegin", HTML);
    }
})();

// check out handler from
(() => {
    const date = new Date();
    const yaer = date.getFullYear();
    const moth = date.getMonth();
    const day = date.getDate();
    const btnCheckOut = document.getElementById("btnCheckOut");
    if (btnCheckOut) {
        const handlerform = async (e) => {
            let CheckOutName = await document.getElementById("CheckOutName")
                .value;
            let CheckOutPhone = await document.getElementById("CheckOutPhone")
                .value;
            let CheckOutAddress = await document.getElementById(
                "CheckOutAddress"
            ).value;
            let CheckOutEmail = await document.getElementById("CheckOutEmail")
                .value;
            let CheckOutRadio = await document.querySelector(
                'input[name="optradio"]:checked'
            ).value;
            let CheckOutContent = await document.getElementById(
                "CheckOutContent"
            ).value;
            console.log(CheckOutRadio);
            if (
                !CheckOutName ||
                !CheckOutPhone ||
                !CheckOutAddress ||
                !CheckOutEmail ||
                !CheckOutContent ||
                !CheckOutRadio
            ) {
                alert("Vui lòng nhập đầy đủ thông tin");
                return;
            }

            function getRandomInt(max) {
                return Math.floor(Math.random() * max * 100000);
            }
            let codecart = getRandomInt(10);
            let data = {
                customer_name: CheckOutName,
                customer_address: CheckOutAddress,
                customer_email: CheckOutEmail,
                customer_phone_number: CheckOutPhone,
                customer_mess: CheckOutContent,
                transfer_money: CheckOutRadio,
                order_code: codecart,
                total_product_cost: totalProduct,
                created_date: `${day}/${moth}/${yaer}`,
                status: 1,
            };

            axios
                .post("http://localhost:3000/orders", data)
                .then(function (response) {
                    console.log(response);
                })

                .catch(function (error) {
                    console.error(error);
                });
            handlerOrderDetail(codecart);
        };

        const handlerOrderDetail = async (codecart) => {
            // let datanewOrderLatearr = await response.data.pop();
            let dataDetailOrder = ProductIncart.map((item) => {
                priceFlowProduct = item.price * item.quantity;
                return {
                    order_id: codecart,
                    product_id: item.id,
                    quantity: item.quantity,
                    product_price: priceFlowProduct,
                    created_date: `${day}/${moth}/${yaer}`,
                };
            });

            console.log(dataDetailOrder);
            axios
                .post("http://localhost:3000/order_details", dataDetailOrder)
                .then(function (response) {
                    console.log(response);
                    location.href = "./order-complete.html";
                    localStorage.clear();
                })
                .catch((err) => console.error(err));
        };
        btnCheckOut.addEventListener("click", handlerform);
    }
})();

// list category product
const listCateProduct = (cate_id) => {
    const rootCate = document.querySelector(".list_product_cate");
    console.log(cate_id);
    axios
        .get(`http://localhost:3000/products?cate_id=${cate_id}`)
        .then((response) => {
            console.log(response);
            let listCateHtml = "";
            console.log(response);
            response.data.map((item) => {
                listCateHtml += `
			
			<div class="col-lg-4 mb-4 text-center">
								<div class="product-entry border">
									<a href="./product-detail.html?id=${item.id}&cate_id=${
                    item.cate_id
                }" class="prod-img">
										<img src="${
                                            item.image
                                        }" class="img-fluid" alt="Free html5 bootstrap 4 template">
									</a>
									<div class="desc">
										<h2><a href="./product-detail.html?id=${item.id}&cate_id=${item.cate_id}">${
                    item.name
                }</a></h2>
										<span class="price">${formatter.format(item.price)} VND</span>
									</div>
								</div>
							</div>
				
			`;
            });
            if (rootCate) {
                rootCate.insertAdjacentHTML("afterbegin", listCateHtml);
            }
        })

        .catch((error) => {
            console.error("Lỗi:", error);
        });
};
listCateProduct(cate_id);

// cookies object
let allCookies = document.cookie;

// Chuyển đổi chuỗi cookies thành một đối tượng
function parseCookies() {
    var cookies = {};
    var cookieArray = allCookies.split(";");

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        var parts = cookie.split("=");
        var name = parts[0];
        var value = parts[1];
        cookies[name] = value;
    }

    return cookies;
}

// Sử dụng hàm parseCookies để lấy đối tượng cookies
var cookiesObject = parseCookies();

if (cookiesObject.iduser) {
    const iconuser = document.querySelector(".iconuser");
    iconuser.style.display = "inline-block";
    const account = document.querySelector(".account");
    account.style.display = "none";

    console.log(cookiesObject.iduser + "có id user");
} else {
    console.log("ko có id");
    const account = document.querySelector(".account");
    account.style.display = "inline-block";
}

// list cate nav index.html

const listCate = () => {
    const rootCate = document.querySelector(".listcatenav");
    console.log(rootCate);
    axios
        .get("http://localhost:3000/categories")
        .then((response) => {
            let listCateHtml = "";

            response.data.map((item) => {
                listCateHtml += `
			<li><a href="./pages/categorys.html?cate_id=${item.id}">${item.name}</a></li>
			`;
            });
            if (rootCate) {
                rootCate.insertAdjacentHTML("afterbegin", listCateHtml);
            }
        })

        .catch((error) => {
            console.error("Lỗi:", error);
        });
};
listCate();

// list cate nav thư mục pages sài hết

const listCatesub = () => {
    const rootCate = document.querySelector(".listcate_sub");
    console.log(rootCate);
    axios
        .get("http://localhost:3000/categories")
        .then((response) => {
            let listCateHtml = "";

            response.data.map((item) => {
                listCateHtml += `
			<li><a href="./categorys.html?cate_id=${item.id}">${item.name}</a></li>
			`;
            });
            if (rootCate) {
                rootCate.insertAdjacentHTML("afterbegin", listCateHtml);
            }
        })

        .catch((error) => {
            console.error("Lỗi:", error);
        });
};
listCatesub();
