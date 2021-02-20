import { ButtonBase } from '@material-ui/core';
import React, { useCallback } from 'react';
import Logo from '../../components/svg/Logo';
import { useDialog } from '../../hooks/useDialog';
import styles from './MainContainer.module.scss';


const MainContainer = () => {
    const openDialog = useDialog();

    const onClickOpenDialog = useCallback(() => {
        openDialog('React-Express', 'apply to server-side-render', () => {
            
        }, false);
    }, [openDialog]);

    return (
        <div className={styles['container']}>
            <div className={styles['content']}>
                <Logo className={styles['logo']} />
                <ButtonBase className={styles['button']} onClick={onClickOpenDialog}>
                    Open Dialog
                </ButtonBase>
            </div>
        </div>
    );
};

export default MainContainer;
