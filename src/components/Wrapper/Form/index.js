import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import makeBem from 'bem-cx';
import { Card, CardText } from 'material-ui/Card';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import './form.css';

const bem = makeBem('formWrapper');

const FormWrapper = ({ title, backLink, outerWidth, innerWidth, children }) =>
  <Card className={bem} style={{ width: outerWidth }}>
    <CardText>
      {!!backLink && <Link className={bem.el('backButton')} to={backLink}><NavigationArrowBack color="#000000" /></Link>}
      <div className={bem.el('logo')} />
      {title && <div className={bem.el('title')}>{title}</div>}
      <div className={bem.el('content')} style={{ width: innerWidth }}>{children}</div>
    </CardText>
  </Card>;

FormWrapper.propTypes = {
  title: PropTypes.string,
  backLink: PropTypes.string,
  outerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  innerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
};

export default FormWrapper;
