import "./About.css"


function About() {
    return (
        <div id="cmn-information">
            <img src="/images/about-us.jpg" />
            <article>
                <p><span>From Readers for Readers</span> is Online Community for Book Lovers,where you can Sell,Find or chat about books you have read
                    or are currently reading with other book lovers.If you are an avid reader you should definitely check it out. The number of books some people read in a year is astounding and inspirational.
                    These people read and read A LOT. And, they love to discuss their books.  If you join a group, you aren’t required or pressured to read their monthly selections,
                    but you can still participate in discussion. In addition, most groups take votes for monthly selections, so your voice is heard and important.
                    Our main goal is to connect people with each other and share their passion ,thats why we are growing faster and faster
                    ,also we are open for new ideas,so if you have some fresh ideas please share them with us.</p>
            </article>
            <div className="contacts">
                <h3>Contact Us</h3>
                <div className="contacts-info">

                    <div className="contacts-adress">
                        <h5><span>Location</span> - Springwood, Ohio</h5>
                        <h5><span>Adress</span> - 1428, Elm Street</h5>
                        <h5><span>Email</span> - Frfr@gmail.com</h5>
                    </div>

                    <div className="md-cont">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-android"></a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About