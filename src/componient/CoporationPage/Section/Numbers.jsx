import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../../Style/Number.scss';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import { STATUS } from '../../../utils/constant';

const Numbers = React.memo((props) => {
    const itemData = props?.data?.item;
    const languageApp = useSelector((state) => state.language.language);
    const NumberAnimation = ({ targetNumber }) => {
        const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.5,
        });

        const numberMatch = targetNumber.match(/^(\d+)/);
        const textMatch = targetNumber.match(/[^\d]+$/);
        const numberPart = numberMatch ? parseInt(numberMatch[0], 10) : 0;
        const textPart = textMatch ? textMatch[0] : '';

        const { number } = useSpring({
            from: { number: 0 },
            to: inView ? { number: numberPart } : { number: 0 },
            config: { duration: 2000 },
        });

        return (
            <div ref={ref} className="number-animation">
                <animated.span>{number.to((n) => `${formatNumber(Math.floor(n))}${textPart}`)}</animated.span>
            </div>
        );
    };

    const formatNumber = (number) => {
        return new Intl.NumberFormat('de-DE').format(number);
    };
    return (
        <>
            {itemData?.status === STATUS.PUBLISH && (
                <div className="numbers-container">
                    <div className="container">
                        {itemData?.translations?.map((e, z) => {
                            if (e.languages_code === languageApp) {
                                return <h4 key={z}>{e?.title}</h4>;
                            }
                        })}
                        <div className="row justify-content-center mt-4">
                            {itemData.contents?.map((number, index) => {
                                if (number?.item?.status === STATUS.PUBLISH) {
                                    return (
                                        <div
                                            className="col-lg-3 col-sm-6 col-12 d-flex align-items-center justify-content-center flex-column mb-4"
                                            key={index}
                                        >
                                            <div className="number">
                                                <NumberAnimation targetNumber={number?.item?.number} />
                                            </div>
                                            {number?.item?.translations?.map((ele, z) => {
                                                if (ele?.languages_code === languageApp) {
                                                    return <div key={z}>{ele?.title}</div>;
                                                }
                                            })}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default Numbers;
