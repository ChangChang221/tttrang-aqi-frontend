import ManageStations from "./ManageStations";
import ManageUserAccounts from "./manageUserAccounts";
import React, {useState} from 'react'

export default function ManageAdmin() {
    const [checkOption, setCheckOption] = useState(true);
    const styles = {
      width: 220,
      margin: '10px 14px 0px',
    };
  
    return (
      <div className='ad-main-popup'>
        <div>
          <div className='group-list'>
            <div>
              <button
                className={['btn-tab', checkOption == true ? 'active' : null].join(' ')}
                onClick={() => setCheckOption(true)}
              >
                User-list
              </button>
              <button
                className={['btn-tab', checkOption == false ? 'active' : null].join(' ')}
                onClick={() => setCheckOption(false)}
              >
                Station-list
              </button>
            </div>
          </div>
          {checkOption ? <ManageUserAccounts /> : <ManageStations />}
        </div>
      </div>
    );
  }