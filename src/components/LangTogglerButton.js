import React from "react";
import { connect } from "react-redux";

import { LangContext } from "./MyContext";

import ReactFlagsSelect from "react-flags-select";

//import css module
import "react-flags-select/css/react-flags-select.css";

import eng from "../lang/eng.json";
import id from "../lang/id.json";
import cn from "../lang/cn.json";
import cn_tr from "../lang/cn_tr.json";

import { getContent } from "../redux/ducks/actions";

function LangTogglerButton(props) {
  return (
    <LangContext.Consumer>
      {({ lang, toggleLang }) => (
        <ReactFlagsSelect
          defaultCountry={props.lang}
          countries={["ID", "GB", "CN", "HK"]}
          customLabels={{
            ID: "Indonesian",
            GB: "English",
            CN: "Mandarin",
            HK: "Mandarin Traditional"
          }}
          showSelectedLabel={false}
          showOptionLabel={true}
          className="menu-flags"
          // onSelect={countryCode => toggleLang(countryCode)}
          onSelect={async a => {
            let data = id;
            if (a == "GB") {
              data = "EN";
            }

            if (a == "CN") {
              data = "";
            }

            if (a == "HK") {
              data = "HK";
            }

            if (a == "ID") {
              data = "ID";
            }
            await props.changeLang(a);
            await props.getContent(props.activePage, data, true);
          }}
        />
      )}
    </LangContext.Consumer>
  );
}

const mapStateToProps = state => ({
  // pageStore: state.pageStore
  lang: state.pageStore.currentLang,
  activePage: state.pageStore.activePage
});

const mapDispatchToProps = dispatch => ({
  // fetchPage: (section, lang) => dispatch(fetchPage(section, lang))

  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle)),
  changeLang: lang =>
    dispatch({
      type: "CHANGE_LANG",
      payload: lang
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(LangTogglerButton);
