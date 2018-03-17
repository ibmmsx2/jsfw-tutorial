import React, { Component } from 'react';
import moment from 'moment';

import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';
import Viewer from './components/Viewer';

import * as api from './lib/api';

class App extends Component {
    state = {
        loading: false,
        maxDate: null,
        date: null,
        url: null,
        mediaType: null
    }

    getAPOD = async (date) => {
        if (this.state.loading) return;

        // 로딩 상태 시작
        this.setState({
            loading: true
        });

        try {
            const response = await api.getAPOD(date);
            // 비구조화 할당 + 새로운 이름
            const { date: retrievedDate, url, media_type: mediaType } = response.data;

            if (!this.state.maxDate) {
                this.setState({
                    maxDate: retrievedDate
                });
            }

            this.setState({
                date: retrievedDate,
                mediaType,
                url
            });
        } catch (e) {
            console.log(e);
        }

        // 로딩 상태 종료
        this.setState({
            loading: false
        });
    }

    handlePrev = () => {
        const { date } = this.state;

        const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
        this.getAPOD(prevDate);
    }

    handleNext = () => {
        const { date, maxDate } = this.state;
        if (date === maxDate) return;

        const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
        this.getAPOD(nextDate);
    }

    componentDidMount() {
        this.getAPOD();
    }

    render() {
        const { url, mediaType, loading } = this.state;
        const { handlePrev, handleNext } = this;
        return (
            <div>
                <ViewerTemplate
                    spaceNavigator={(
                        <SpaceNavigator
                            onPrev={handlePrev}
                            onNext={handleNext}/>
                        )}
                    viewer={(
                        <Viewer
                            url={url}
                            mediaType={mediaType}
                            loading={loading} />
                    )}
                />
            </div>
        );
    }
}

export default App;
