import { Modal, ButtonToolbar, Button } from 'rsuite';
import RemindIcon from '@rsuite/icons/legacy/Remind';
import React, {useEffect, useState} from 'react'

export default function WarningDisconnect(){
    
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    
    const handleOnline = () => {
        setIsOnline(true);
    };
    
    const handleOffline = () => {
    setIsOnline(false);
    };

    useEffect(() => {
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
    
        return () => {
          window.removeEventListener("online", handleOnline);
          window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return (
    <Modal backdrop="static" role="alertdialog" open={!isOnline} onClose={handleOnline} size="xs">
        <Modal.Body>
          <RemindIcon style={{ color: '#ffb300', fontSize: 24 }} />
          Bạn đã mất kết nối Internet. Vui lòng kiểm tra lại đường truyền.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleOnline} appearance="primary">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    )
}