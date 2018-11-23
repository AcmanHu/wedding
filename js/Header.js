var Herder = `<div class="header-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div class="logo-area">
                                <a href="index.html"><img src="img/logo002.png" alt=""></a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="main-menu-area">
                                <nav>
                                    <ul id="nav">
                                        <li><a href="index.html">首页</a></li> 
                                        <li><a href="about.html">案例</a>
                                        	<ul>
                                                <li><a href="about.html">婚礼案例</a></li>
                                                <li><a href="case-msg.html">婚纱摄影</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="team.html">团队</a>
                                        	<ul>
                                                <li><a href="team.html">化妆师</a></li>
                                                <li><a href="team.html">主持人</a></li>
                                                <li><a href="team.html">摄影师</a></li>
                                                <li><a href="team.html">摄像师</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="flower.html">鲜花预定</a></li>                            
                                        <li><a href="hotel.html">婚宴酒店</a></li>
                                        
                                        <li><a href="contact.html">联系我们</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 hidden-sm hidden-xs text-right">

                        </div>
                    </div>
                </div>
            </div>
            <div class="mobile-menu-area">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="mobile-menu">
                      <nav id="dropdown">
                        <ul>
                            <li><a href="index.html">首页</a></li> 
							<li><a href="about.html">案例</a></li>
							<li><a href="services.html">服务</a>                                            
								<ul>
									<li><a href="single-services.html">个人服务</a></li>
								</ul>
							</li>                            
							<li><a href="blog.html">博客</a></li>
							<li><a href="team.html">团队</a></li>
							<li><a href="contact.html">联系我们</a></li>
                        </ul>
                      </nav>
                    </div>          
                  </div>
                </div>
              </div>
            </div>`
	$('header').append(Herder);
	$('header').css({'font-size':'18px'});