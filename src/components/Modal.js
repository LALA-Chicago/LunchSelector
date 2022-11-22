import React, { useState, useEffect } from 'react';
import '../App.css'

function Example() {
    const [isShown, setIsShown] = useState(false);

    const showModal = () => {
      setIsShown(true);
    };
  
    const closeModal = () => {
      setIsShown(false);
    };
  
    const dynammicModalClass = () => (isShown ? { display: 'block' } : '');
  
    useEffect(() => {
      if (!sessionStorage.popupModal) {
        const timer = setTimeout(() => {
          setIsShown(true);
          sessionStorage.popupModal = 1;
        }, 2000);
  
        return () => clearTimeout(timer);
      }
    }, []);
  

    return isShown ? (
      <div className="modal" style={dynammicModalClass()} id="channelModal">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" >
            <div className="modal-header">
              <h5 className="modal-title text-light w-100">What are we eating?</h5>
              <button
                onClick={closeModal}
                style={{ color: '#fff' }}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
  
            <div className="modal-body ">
              <div className="row">
                <div className="col-6 ">
                </div>
  
                <div>
                  <p className="modalText">

                    Ever spent hours debating what to eat with your partner/roommate/colleague?
                    No more!

                    Enter your location and if you want a food category

                    Let the computer decide what's for breakfast/lunch/dinner.
                    If you like the restaurant you can save it if you login or sign up!

                    What are you waiting for?

                  </p>
                </div>
              </div>
            </div>
  
            <div className="modal-footer">
              <button className="btn-lg">
                <span>
                  <a href="ready to eat" style={{ color: '#fff' }}>
                    I'm Ready to Eat{' '}
                  </a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  };
  


export default Example;