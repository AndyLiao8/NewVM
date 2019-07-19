import * as React from 'react';
import { connect } from 'react-redux';
import KBList from './KBList';
import { mapStateToProps, mapDispatchToProps } from 'src/vm.application/appKBService';


export default connect(mapStateToProps, mapDispatchToProps)(KBList);