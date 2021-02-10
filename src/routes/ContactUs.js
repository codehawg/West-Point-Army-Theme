import Layout from '../components/Layout'
import './ContactUs.scss'

const ContactUs = (props) => {
    return (
      <Layout {...props} className="contact-us">
        <div className="container-fluid">
          <h2 className="text-center">CONTACT US</h2>
          <div className="row">
            <div className="col-sm-5">
              <p>Contact us and we will get back to you within 24 hours.</p>
              <p>1712 East Main Street, Van Buren AR, USA </p>
              <p>Van Buren, US</p>
              <p>(479)474-8036</p>
              <p>contactus@teamcpi.com</p> 
            </div>
            <div className="col-sm-7">
              <div className="row">
                <div className="col-sm-6 form-group">
                  <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                </div>
                <div className="col-sm-6 form-group">
                  <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                </div>
              </div>
              <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br />
              <div className="row">
                <div className="col-sm-12 form-group">
                  <button className="btn btn-default pull-right" type="submit">Send</button>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </Layout>
    )
}
  
export default ContactUs