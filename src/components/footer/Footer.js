import React from 'react'
import { MDBFooter, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
const Footer = () => {
  return (
    <>
    <MDBFooter bgColor='dark' color='white' className='text-center text-lg-start text-muted'>
<section className='mt-5 p-5'>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong>Regjistrohuni per ofertat e fundit</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' className='' placeholder='Email Adresa' />
              </MDBCol>

              <div className='col-auto'>
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </div>
            </div>
          </form>
        </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{fontSize:"80px"}}>
                <i className='fas fa-gem me-3'></i>PIXO
              </h6>
              <p>
                Ueb-faqe e porosive online te ushqimit.
                100% e sigurte
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>FAQ</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Si te kryejme porosi?
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Si procesohen te dhenat?
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  A mund ta anuloj porosine?
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Kush eshte PIXO?
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Linqe te shpejta</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Porosite
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Profili
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Restaurante
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Ndihma
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Kontaktet</h6>
              <p>
                Prishtine, Kosove 10000, Rruga 'Bill Clinton'
              </p>
              <p>
                info@pixo.com
              </p>
              <p>
                + 01 234 567 88
              </p>
              <p>
                + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright: 
        <a className='text-reset fw-bold' href='/'>
          Pixo
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer
