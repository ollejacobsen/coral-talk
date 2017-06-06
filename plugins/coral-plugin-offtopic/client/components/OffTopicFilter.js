import React from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addClassName, removeClassName} from 'coral-embed-stream/src/actions/comment';

class OffTopicFilter extends React.Component {

  tag = 'OFF_TOPIC';
  className = 'wapoOfftopic';

  handleChange = (e) => {
    if (e.target.checked) {
      this.props.addClassName({
        [this.className] : {tags: [this.tag]}
      });
    } else {
      const idx = this.props.comment.classNames.indexOf(this.className);
      this.props.removeClassName(idx);
    }
  }

  render() {
    return (
      <div className={styles.viewingOption}>
        <label>
          <input type="checkbox" onChange={this.handleChange}/>
          Hide Off-Topic Comments
        </label>
      </div>
    );
  }
}

const mapStateToProps = ({comment}) => ({comment});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({addClassName, removeClassName}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OffTopicFilter);