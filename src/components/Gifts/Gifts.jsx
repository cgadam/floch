import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gifts.css';

const Gifts = (props) => {
  const {
    message,
    icons,
    account,
    lists,
  } = props;

  const listsButtons = lists.map((list, index) => {
    return (
      <a key={`lista-${index}`} target='_blank' rel='noopener noreferrer' className={styles.listButton} href={list.link} >
        {list.name}
      </a>
    );
  });

  return (
    <div className={styles.gifts}>
      <div className={styles.message}>{message}</div>
      <div className={styles.giftMethods}>
        <div className={styles['side-by-side']}>
          <div className={styles.side}>
            <img className={styles.icon} src={icons.cashInHand} alt='Plata en mano' />
            <div className={styles.title}>Cash</div>
          </div>
          <div className={styles.side}>
            <img className={styles.icon} src={icons.bankTransfer} alt='Transferencia' />
            <div>
              <div className={styles.title}>Transferencia bancaria</div>
              <div className={styles.accountInfoContainer}>
                <div className={styles.accountInfo}>
                  <span>Tipo:</span><span className={styles.accountData}>{account.tipo}</span>
                </div>
                <div className={styles.accountInfo}>
                  <span>Banco:</span><span className={styles.accountData}>{account.banco}</span>
                </div>
                <div className={styles.accountInfo}>
                  <span>Alias:</span><span className={styles.accountData}>{account.alias}</span>
                </div>
                <div className={styles.accountInfo}>
                  <span>CBU:</span><span className={styles.accountData}>{account.cbu}</span>
                </div>
                <div className={styles.note}>
                 { account.note }
                </div>
              </div>
            </div>
          </div>
          <div className={styles.side}>
            <img className={styles.icon} src={icons.shop} alt='Lista de casamiento' />
            <div className={styles.title}>Lista</div>
            <div className={styles.listasContainer}>
              { listsButtons }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Gifts.propTypes = {
  message: PropTypes.string.isRequired,
  account: PropTypes.object.isRequired,
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Gifts;