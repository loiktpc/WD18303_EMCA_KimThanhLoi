const headerroot = document.getElementById("rootheader") ;

// header 
const header = `
<nav class="colorlib-nav" role="navigation">
			<div class="top-menu">
				<div class="container">
					<div class="row">
						<div class="col-sm-7 col-md-9">
							<div id="colorlib-logo"><a href="index.html">
								<img class="logobeephone" src="./images/logobeephone.png" />
							</a></div>
						</div>
						<div class="col-sm-5 col-md-3">
			            <form action="#" class="search-wrap">
			               <div class="form-group">
			                  <input type="search" class="form-control search" placeholder="Tìm kiếm">
			                  <button class="btn btn-primary submit-search text-center" type="submit"><i class="icon-search"></i></button>
			               </div>
			            </form>
			         </div>
		         </div>
					<div class="row">
						<div class="col-sm-12 text-left menu-1">
							<ul>
								<li class="active"><a href="/" data-navigo>Trang chủ</a></li>
								<li class="has-dropdown">
									<a href="index.html">Shop</a>
									<ul class="dropdown listcatenav">
										
										
										
									</ul>
								</li>
								
								<li><a href="./pages/about.html" data-navigo>Giới thiệu</a></li>
								<li><a href="./pages/contact.html" data-navigo>Liên hệ</a></li>
								<li class="cart">
								<a href="./pages/profile.html" class="iconuser">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
								<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
								<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
								</svg>
								</a>
								<a class="account" href="./auth/login.html"> tài khoản </a>
								<a href="./pages/cart.html" data-navigo><i class="icon-shopping-cart"></i> Giỏ hàng</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="sale">
				<div class="container">
					<div class="row">
						<div class="col-sm-8 offset-sm-2 text-center">
							<div class="row">
								<div class="owl-carousel2">
									<div class="item">
										<div class="col">
											<h3><a href="#">TUẦN LỄ HP - Giảm giá 25% khuyến mãi những món đồ hấp dẫn</a></h3>
										</div>
									</div>
									<div class="item">
										<div class="col">
											<h3><a href="#">Cuối Tuần Săn Sale 50%</a></h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
`
if(headerroot){

	headerroot.insertAdjacentHTML('afterbegin',header)
}







// footer 
const stringft = `
<footer id="colorlib-footer" role="contentinfo">
			<div class="container">
				<div class="row row-pb-md">
					<div class="col footer-col colorlib-widget">
						<h4>Giới Thiệu Beephone</h4>
						<p>Ngay cả Pointing toàn năng cũng không kiểm soát được các văn bản mù, đó là một cuộc sống gần như không chính thống</p>
						<p>
							<ul class="colorlib-social-icons">
								<li><a href="#"><i class="icon-twitter"></i></a></li>
								<li><a href="#"><i class="icon-facebook"></i></a></li>
								<li><a href="#"><i class="icon-linkedin"></i></a></li>
								<li><a href="#"><i class="icon-dribbble"></i></a></li>
							</ul>
						</p>
					</div>
					<div class="col footer-col colorlib-widget">
						<h4>Chăm sóc khách hàng</h4>
						<p>
							<ul class="colorlib-footer-links">
								<li><a href="#">Liên hệ</a></li>
								<li><a href="#">Trả lại/Trao đổi</a></li>
								<li><a href="#">Phiếu quà tặng</a></li>
								<li><a href="#">Danh sách yêu thích</a></li>
								<li><a href="#">Đặc biệt</a></li>
								<li><a href="#">Dịch vụ khách hàng</a></li>
							
							</ul>
						</p>
					</div>
					<div class="col footer-col colorlib-widget">
						<h4>THÔNG TIN</h4>
						<p>
							<ul class="colorlib-footer-links">
								<li><a href="#">Về chúng tôi</a></li>
								<li><a href="#">Thông tin giao hàng</a></li>
								<li><a href="#">Chính sách bảo mật</a></li>
								<li><a href="#">Hỗ trợ</a></li>
								<li><a href="#">Theo dõi đơn hàng</a></li>
							</ul>
						</p>
					</div>

					
					<div class="col footer-col">
						<h4>Thông tin liên lạc</h4>
						<ul class="colorlib-footer-links">
							<li>44 kênh 30/4 Khóm 6 Phường 6, <br> Thành Phố Sóc Trăng</li>
							<li><a href="tel://1234567920">+ 0975 0356 80</a></li>
							<li><a href="mailto:info@yoursite.com">loiktpc05314@fpt.edu.vn</a></li>
							<li><a href="#">BeePhone.com.vn</a></li>
						</ul>
					</div>
				</div>
			</div>
			
		</footer>
`

const ft = document.querySelector('.footerroot');
if(ft){

	ft.insertAdjacentHTML('afterbegin',stringft)
}