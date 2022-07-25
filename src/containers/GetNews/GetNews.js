import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import News from "../../components/News/NewsDaily/Newsdaily";
import Aux from "../../hoc/Wrap/Wrap";
import Spinner from "../../components/Spinner/Spinner";

class GetNews extends Component {
  intervalId;
  componentDidMount() {
    this.props.onFetchNews();
    this.intervalId = setInterval(() => this.props.onFetchChart, 300000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    let news = this.props.error ? <p>News can't be loaded...</p> : <Spinner />;
    if (this.props.news.length !== 0) {
      let array = this.props.news;
      news = array.map((news) => {
        return (
          <News
            key={news.title}
            title={news.title}
            description={news.description}
            content={news.content}
            link={news.url}
            author={news.author}
            heading={news.source.name}
            time={news.publishedAt}
            image={news.urlToImage}
          ></News>
        );
      });
    }
    return <Aux>{news}</Aux>;
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news.news,
    error: state.news.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchNews: () => dispatch(actions.fetchNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetNews);
