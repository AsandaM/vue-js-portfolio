<template>
  <section class="contact" id="contact">
        <div class="container">
            <div class="heading text-center">
                <h2>Contact
                    <span> Me </span></h2>
            </div>
            <div class="row contact-container">
                <div class="col-md-5 contactMe">
                    <div class="title">
                        <h3 class="text-white">Let's get in touch</h3>
                        <p>I am always excited to explore new opportunities and challenges in the tech industry.
                          Feel free to contact me for discussions on potential opportunities or to learn more about my background and skills.</p>
                    </div>
                    <div class="content">
                        <!-- Info-1 -->
                        <div class="info">
                            <i class="fas fa-mobile-alt"></i>
                            <h4 class="d-inline-block text-white">PHONE :
                                <br>
                                <span>+27 60 664 4494</span></h4>
                        </div>
                        <!-- Info-2 -->
                        <div class="info">
                            <i class="far fa-envelope"></i>
                            <h4 class="d-inline-block text-white">EMAIL :
                                <br>
                                <span>asandamehlo088@gmail.com</span></h4>
                        </div>
                        <!-- Info-3 -->
                        <div class="info">
                            <i class="fas fa-map-marker-alt"></i>
                            <h4 class="d-inline-block text-white">ADDRESS :<br>
                                <span>Crossroads, Cape Town, 7750</span></h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 contactMe">

                    <form action="https://formcarry.com/s/SpSXqcRRU7e" method="POST" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-sm-6">
                                <input type="text" name="name" class="form-control" placeholder="Name">
                            </div>
                            <div class="col-sm-6">
                                <input type="email" name="email" class="form-control" placeholder="Email">
                            </div>
                            <div class="col-sm-12">
                                <input type="text" name="subject" class="form-control" placeholder="Subject">
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea name="message" class="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                        </div>
                        <button class="btn btn-block" type="submit">Send Now!</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.contact {
  margin-top: 10px;
}

.contact-container:hover{
  border: 1px solid white;
}

.contact-container{
  background-color: #1a3a33;
  padding: 20px;
  border-radius: 10px;
}
.col-md-7{
  background-color: rgba(145, 186, 159, 0.6);
  border-radius: 10px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
}

.contact .heading h2 {
    font-size: 30px;
    font-weight: 700;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;

}

.contact .heading h2 span {
    color: #149279;
}

.contact .heading p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7;
    color: white;
    margin: 20px 0 20px;
    padding: 0;
}

.contact .form-control {
    padding: 25px;
    font-size: 18px;
    margin-bottom: 10px;
    background: transparent;
    border-bottom: 1px solid #fffdfb;
    border-radius: 10px;
}

.contact button.btn {
  padding: 0.6rem 1.3rem;
  background-color: #fff;
  border: 2px solid #fafafa;
  font-size: 0.95rem;
  color: #1abc9c;
  line-height: 1;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 0;
  width: 100%;
}

button.btn:hover {
  background-color: transparent;
  color: #fff;
}

.contact .title h3 {
    font-size: 18px;
    font-weight: 600;
}

.contact .title p {
    font-size: 15px;
    font-weight: 400;
    color: white;
    line-height: 1.6;
    margin: 0 0 40px;
    font-style: italic;
}

.contact .content .info {
    margin-top: 30px;
}
.contact .content .info i {
    font-size: 30px;
    padding: 0;
    margin: 0;
    color: white;
    margin-right: 20px;
    text-align: center;
    width: 20px;
}
.contact .content .info h4 {
    font-size: 13px;
    line-height: 1.4;
}

.contact .content .info h4 span {
    font-size: 13px;
    font-weight: 300;
    color: white;
}

</style>