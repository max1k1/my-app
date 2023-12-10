import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './ProfileStatus.module.css';

type PropsType = {
  status: string;
  isOwner: boolean;
  updateStatus: (tempStatus: string) => void;
};
const ProfileStatusWithHooks: React.FC<PropsType> = ({ status, isOwner, updateStatus }) => {
  let [editMode, setEditMode] = useState(false);
  let [tempStatus, setStatus] = useState(status);
  useEffect(() => {
    setStatus(status);
  }, [status]);
  const activateEditMode = () => {
    if (isOwner) {
      setEditMode(true);
    }
  };
  const deavateEditMode = () => {
    setEditMode(false);
    updateStatus(tempStatus);
  };
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div className={styles.status}>
          <span onClick={activateEditMode}>{status || ''}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            className={styles.status}
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deavateEditMode}
            value={tempStatus}
          />
        </div>
      )}
    </div>
  );
};
export default ProfileStatusWithHooks;
