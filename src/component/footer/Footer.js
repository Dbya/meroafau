import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';



const Footer = () => {
    
  return (
    <div>
    <MDBFooter className='text-center' color='white' bgColor='dark'>
    <MDBContainer className='p-4'>
      <section className='mb-4'>
        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

      </section>

 
      <section className='mb-4'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
          voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
          sequi voluptate quas.
        </p>
      </section>

      <section className=''>
        <MDBRow className='d-flex justify-content-center'>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0 d-flex flex-row justify-content-between'>
              <li>
                <a href='#!' className='text-white'>
                  Home
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  About us
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Services
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Help
                </a>
              </li>
            </ul>
          </MDBCol>

        </MDBRow>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2023 Copyright:
      <a className='text-white' href='/#'>
        ShopMart
      </a>
    </div>
  </MDBFooter>
   
    </div>
  )
}

export default Footer