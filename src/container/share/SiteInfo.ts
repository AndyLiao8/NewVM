import { connect } from 'react-redux';
import SiteInfo from 'src/components/SiteInfo';
import * as selectors from 'src/store/selectors';
import { getSiteConfig } from 'src/actions/creator';


const mapStateToProps = (state) => {
    const siteInfo = selectors.getSiteConfig(state);
    return {
        isLoading: selectors.getSiteConfigIsLoading(state),
        defaultTwitterAmount: siteInfo.defaultTwitterAmount,
        isPartnerSite: siteInfo.isPartnerSite,
        maxTwitterAmount: siteInfo.maxTwitterAmount,
        siteId: siteInfo.siteId,
    };  
};

const mapDispatchToProps = dispatch => ({
    onLoadSiteInfo() {
        dispatch(getSiteConfig(499504));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteInfo);