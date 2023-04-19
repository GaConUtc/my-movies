import React from 'react';
import { Row, Collapse, Input, Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTypeShow } from '../../app/Slices/typeShowMovieDesc';
import { setTypeSpace } from '../../app/Slices/typeSpaceMovieDesc';
import { setTypeStart } from '../../app/Slices/typeStartMovieDesc';
import { setTypeEnd } from '../../app/Slices/typeEndMovieDesc';
const { Panel } = Collapse;

const MovieDescription = ({ episodes, content, name }) => {
    const stateReducer = useSelector((state) => state);
    const dispatch = useDispatch();
    const onChangeType = ({ payload, type }) => {
        switch (type) {
            case 'TypeShow':
                return dispatch(setTypeShow(payload));
            case 'TypeStart':
                return dispatch(setTypeStart(payload));
            case 'TypeSpace':
                return dispatch(setTypeSpace(payload));
            case 'TypeEnd':
                return dispatch(setTypeEnd(payload));
            default:
                return;
        }
    };
    const typeShow = stateReducer.typeShowMovieDesc;
    const typeSpace = stateReducer.typeSpaceMovieDesc;
    const typeStart = stateReducer.typeStartMovieDesc;
    const typeEnd = stateReducer.typeEndMovieDesc;

    const typeShowCourse = [
        {
            id: 1,
            text: 'Tập|Link',
        },
        {
            id: 2,
            text: 'Tập|Slug|Link',
        },
        {
            id: 3,
            text: 'Link',
        },
        {
            id: 4,
            text: 'Tên File|Link',
        },
    ];
    return (
        <Row className="movie-description container">
            <Collapse expandIconPosition="end" defaultActiveKey={['1']}>
                <Panel header="Nội dung" key="1">
                    {content}
                </Panel>
            </Collapse>
            <Collapse expandIconPosition="end" defaultActiveKey={['1']}>
                <Panel header="Xem phim" key="1">
                    {episodes?.map((epis, index) => {
                        return (
                            <div className="movie-description__server" key={index}>
                                <div className="movie-description__server__name">
                                    SERVER: <span>{epis?.server_name}</span>
                                </div>
                                <div className="movie-description__server__list">
                                    {epis?.server_data?.map((item, i) => {
                                        return (
                                            <a
                                                key={i}
                                                target="_blank"
                                                rel="noreferrer"
                                                href={item.link_embed}
                                                className="movie-description__server__item"
                                            >
                                                {item?.name}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </Panel>
            </Collapse>
            <Collapse expandIconPosition="end" defaultActiveKey={['1']}>
                <Panel header="Định dạng nguồn" key="1">
                    <div className="movie-description__source">
                        <span>Định dạng hiển thị:</span>
                        {typeShowCourse.map((item, i) => {
                            return (
                                <div key={i} className="movie-description__source__item">
                                    <input
                                        checked={item.id === Number(typeShow)}
                                        onChange={(e) => onChangeType({ payload: e.target.value, type: 'TypeShow' })}
                                        type="radio"
                                        value={item.id}
                                    />
                                    <label>
                                        {typeStart}
                                        {item.text.replace('|', `${typeSpace}`)}
                                        {typeEnd}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                    <Row className="movie-description__type">
                        <div className="movie-description__type__item">
                            <label>Định dạng phân cách: </label>
                            <Input
                                value={typeSpace}
                                onChange={(e) => onChangeType({ payload: e.target.value, type: 'TypeSpace' })}
                            />
                        </div>
                        <div className="movie-description__type__item">
                            <label>Định dạng đầu: </label>
                            <Input
                                value={typeStart}
                                placeholder="VD: ["
                                onChange={(e) => onChangeType({ payload: e.target.value, type: 'TypeStart' })}
                            />
                        </div>
                        <div className="movie-description__type__item">
                            <label>Định dạng cuối: </label>
                            <Input
                                value={typeEnd}
                                placeholder="VD: ]"
                                onChange={(e) => onChangeType({ payload: e.target.value, type: 'TypeEnd' })}
                            />
                        </div>
                    </Row>
                </Panel>
            </Collapse>
            <Collapse expandIconPosition="end" defaultActiveKey={['1']}>
                <Panel header="Nguồn Embed" className="" key="1">
                    <Tabs
                        className="movie-description__embed"
                        type="card"
                        size="small"
                        items={episodes?.map((item, index) => {
                            const childItem = item?.server_data?.map((data) => {
                                switch (typeShow.toString()) {
                                    case '1':
                                        return `${typeStart}${data.name}${typeSpace}${data.link_embed}${typeEnd}`;
                                    case '2':
                                        return `${typeStart}${data.name}${typeSpace}${typeSpace}${data?.slug}${data.link_embed}${typeEnd}`;
                                    case '3':
                                        return `${typeStart}${data.link_embed}${typeEnd}`;
                                    case '4':
                                        return `${typeStart}${name}${typeSpace}${data.link_embed}${typeEnd}`;
                                    default:
                                        return '';
                                }
                            });
                            const childVal = childItem.join('\n').toString();
                            return {
                                label: item?.server_name,
                                key: `${index}`,
                                children: <Input.TextArea disabled={true} value={childVal} />,
                            };
                        })}
                    />
                </Panel>
            </Collapse>
            <Collapse expandIconPosition="end" className="movie-description__m3u8" defaultActiveKey={['1']}>
                <Panel header="Nguồn M3U8" key="1">
                    <Tabs
                        type="card"
                        size="small"
                        items={episodes?.map((item, index) => {
                            const childItem = item?.server_data?.map((data) => {
                                switch (typeShow.toString()) {
                                    case '1':
                                        return `${typeStart}${data.name}${typeSpace}${data.link_m3u8}${typeEnd}`;
                                    case '2':
                                        return `${typeStart}${data.name}${typeSpace}${typeSpace}${data?.slug}${data.link_m3u8}${typeEnd}`;
                                    case '3':
                                        return `${typeStart}${data.link_m3u8}${typeEnd}`;
                                    case '4':
                                        return `${typeStart}${name}${typeSpace}${data.link_m3u8}${typeEnd}`;
                                    default:
                                        return '';
                                }
                            });
                            return {
                                label: item?.server_name,
                                key: `${index}`,
                                children: <Input.TextArea disabled={true} value={childItem.join('\n')} />,
                            };
                        })}
                    />
                </Panel>
            </Collapse>
        </Row>
    );
};

export default MovieDescription;
