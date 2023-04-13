import React from 'react';

const SectionItem = ({ ...props }) => {
    return (
        <div className="section-page__item">
            <div className="section-page__item__header">
                <span className="section-page__item__icon">{props.icon}</span>
                <span className="section-page__item__description">{props.desc}</span>
            </div>
            <div className="section-page__item__title">{props.title}</div>
        </div>
    );
};

export default SectionItem;
