import React, { useEffect, useState } from 'react';
import styles from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const activateEditMode = () => {
    if (props.isOwner) {
      setEditMode(true);
    }
  };
  const deavateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div className={styles.status}>
          <span onClick={activateEditMode}>{props.status || ''}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            className={styles.status}
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deavateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};
export default ProfileStatusWithHooks;
