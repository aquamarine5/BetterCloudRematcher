(() => {
  // src/startup_script.ts
  (() => {
    window["rematcher_rematch"] = function(songId, adjustedSongId) {
      function onloadCallback() {
        console.group(`Rematcher_main_success:(${songId}->${adjustedSongId})`);
        console.log(this);
        console.log(arguments);
        console.groupEnd();
      }
      function onerrorCallback() {
        console.group(`Rematcher_main_failed:(${songId}->${adjustedSongId})`);
        console.error(this);
        console.error(arguments);
        console.groupEnd();
      }
      NEJ.P("nej.j").Ru(
        "".concat(APP_CONF.domain, "/api/cloud/user/song/match"),
        {
          type: "json",
          query: {
            userId: localCache.Du("host.profile.userId"),
            songId,
            adjustSongId: adjustedSongId
          },
          onload: onloadCallback,
          onerror: onerrorCallback
        }
      );
    };
    window["rematcher_cloudsearch"] = function(queryString) {
      console.log(`cloudsearch_main(${queryString})`);
      return new Promise((resolve, reject) => {
        function injectedCallback(data) {
          console.log(`Resolved cloudsearch(arg: ${queryString}):`, data);
          resolve(data);
        }
        let userid = localCache.Du("host.profile.userId");
        let limitNumber = 3;
        var queryData = {
          data: { uid: userid, offset: 0, total: true, limit: limitNumber, keyword: queryString },
          ext: {},
          key: `track_cloud_search-${userid}-${queryString}`,
          limit: limitNumber,
          offset: 0,
          onload: injectedCallback,
          rkey: `r-track_cloud_search-${userid}-${queryString}-0-${limitNumber}`
        };
        window.ctl.player.AJ[0].MF.$i(queryData);
        window.ctl.player.AJ[0].MF.Ge("doloadlist", queryData);
      });
    };
    window["rematcher_combinecolumn"] = function(result) {
      function getImageColor() {
        function getMaterialColorIfPresent() {
          const color = window.getComputedStyle(document.body).getPropertyValue("--md-accent-color");
          if (color == "")
            return null;
          const rgb = color.match(/\d+/g);
          const bgr = rgb.reverse();
          return bgr.map((v) => parseInt(v).toString(16).padStart(2, "0")).join("");
        }
        var o = ctl.skin.At().selected, i = "default" == o.type && "default" == o.name, mac = getMaterialColorIfPresent();
        if (mac) {
          return `#${mac}`;
        } else {
          return i ? "#ffd6d6dc" : "#ff474747";
        }
      }
      const REMATCHER_MENUID = "rematcher-";
      let childrenR = [];
      for (let index = 0; index < result.total; index++) {
        const element = result.list[index];
        childrenR.push({
          menu_id: REMATCHER_MENUID + element.id.toString(),
          text: element.name,
          image_path: NEJ.P("nm.x").Zp("icn_list"),
          image_color: getImageColor(),
          enable: true,
          children: null,
          menu: true,
          separator: false
        });
      }
      console.log(getImageColor());
      childrenR.push({
        separator: true,
        enable: true,
        text: "\u83DC\u5355\u9879",
        menu_id: "0",
        menu: true,
        children: null
      });
      childrenR.push({
        menu_id: 111111,
        text: "\u53E6\u5916\u9009\u62E9",
        image_path: NEJ.P("nm.x").Zp("icn_lookfor"),
        image_color: getImageColor(),
        enable: true,
        menu: true,
        separator: false,
        children: null
      });
      return childrenR;
    };
  })();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3N0YXJ0dXBfc2NyaXB0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoKCkgPT4ge1xyXG4gICAgd2luZG93W1wicmVtYXRjaGVyX3JlbWF0Y2hcIl0gPSBmdW5jdGlvbiAoc29uZ0lkOiBudW1iZXIsIGFkanVzdGVkU29uZ0lkOiBudW1iZXIpIHtcclxuICAgICAgICBmdW5jdGlvbiBvbmxvYWRDYWxsYmFjaygpIHtcclxuICAgICAgICAgICAgY29uc29sZS5ncm91cChgUmVtYXRjaGVyX21haW5fc3VjY2VzczooJHtzb25nSWR9LT4ke2FkanVzdGVkU29uZ0lkfSlgKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBvbmVycm9yQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoYFJlbWF0Y2hlcl9tYWluX2ZhaWxlZDooJHtzb25nSWR9LT4ke2FkanVzdGVkU29uZ0lkfSlgKVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMpXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYXJndW1lbnRzKVxyXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgICAgICB9XHJcbiAgICAgICAgTkVKLlAoXCJuZWoualwiKS5SdShcclxuICAgICAgICAgICAgXCJcIi5jb25jYXQoQVBQX0NPTkYuZG9tYWluLCBcIi9hcGkvY2xvdWQvdXNlci9zb25nL21hdGNoXCIpLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBsb2NhbENhY2hlLkR1KFwiaG9zdC5wcm9maWxlLnVzZXJJZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBzb25nSWQ6IHNvbmdJZCxcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RTb25nSWQ6IGFkanVzdGVkU29uZ0lkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25sb2FkOiBvbmxvYWRDYWxsYmFjayxcclxuICAgICAgICAgICAgICAgIG9uZXJyb3I6IG9uZXJyb3JDYWxsYmFja1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgd2luZG93W1wicmVtYXRjaGVyX2Nsb3Vkc2VhcmNoXCJdID0gZnVuY3Rpb24gKHF1ZXJ5U3RyaW5nOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjbG91ZHNlYXJjaF9tYWluKCR7cXVlcnlTdHJpbmd9KWApXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gaW5qZWN0ZWRDYWxsYmFjayhkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVzb2x2ZWQgY2xvdWRzZWFyY2goYXJnOiAke3F1ZXJ5U3RyaW5nfSk6YCwgZGF0YSlcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdXNlcmlkID0gbG9jYWxDYWNoZS5EdShcImhvc3QucHJvZmlsZS51c2VySWRcIilcclxuICAgICAgICAgICAgbGV0IGxpbWl0TnVtYmVyID0gM1xyXG4gICAgICAgICAgICB2YXIgcXVlcnlEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogeyB1aWQ6IHVzZXJpZCwgb2Zmc2V0OiAwLCB0b3RhbDogdHJ1ZSwgbGltaXQ6IGxpbWl0TnVtYmVyLCBrZXl3b3JkOiBxdWVyeVN0cmluZyB9LFxyXG4gICAgICAgICAgICAgICAgZXh0OiB7fSxcclxuICAgICAgICAgICAgICAgIGtleTogYHRyYWNrX2Nsb3VkX3NlYXJjaC0ke3VzZXJpZH0tJHtxdWVyeVN0cmluZ31gLFxyXG4gICAgICAgICAgICAgICAgbGltaXQ6IGxpbWl0TnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgICAgb25sb2FkOiBpbmplY3RlZENhbGxiYWNrLFxyXG4gICAgICAgICAgICAgICAgcmtleTogYHItdHJhY2tfY2xvdWRfc2VhcmNoLSR7dXNlcmlkfS0ke3F1ZXJ5U3RyaW5nfS0wLSR7bGltaXROdW1iZXJ9YCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3cuY3RsLnBsYXllci5BSlswXS5NRi4kaShxdWVyeURhdGEpXHJcbiAgICAgICAgICAgIHdpbmRvdy5jdGwucGxheWVyLkFKWzBdLk1GLkdlKFwiZG9sb2FkbGlzdFwiLCBxdWVyeURhdGEpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgd2luZG93W1wicmVtYXRjaGVyX2NvbWJpbmVjb2x1bW5cIl0gPSBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VDb2xvcigpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRNYXRlcmlhbENvbG9ySWZQcmVzZW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0tbWQtYWNjZW50LWNvbG9yJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IgPT0gXCJcIikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZ2IgPSBjb2xvci5tYXRjaCgvXFxkKy9nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJnciA9IHJnYi5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmdyLm1hcCgodikgPT4gcGFyc2VJbnQodikudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBvID0gY3RsLnNraW4uQXQoKS5zZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgIGkgPSBcImRlZmF1bHRcIiA9PSBvLnR5cGUgJiYgXCJkZWZhdWx0XCIgPT0gby5uYW1lLFxyXG4gICAgICAgICAgICAgICAgbWFjID0gZ2V0TWF0ZXJpYWxDb2xvcklmUHJlc2VudCgpO1xyXG4gICAgICAgICAgICBpZiAobWFjKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCMke21hY31gXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaSA/IFwiI2ZmZDZkNmRjXCIgOiBcIiNmZjQ3NDc0N1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgUkVNQVRDSEVSX01FTlVJRCA9IFwicmVtYXRjaGVyLVwiXHJcbiAgICAgICAgbGV0IGNoaWxkcmVuUiA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJlc3VsdC50b3RhbDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVzdWx0Lmxpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICBjaGlsZHJlblIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBtZW51X2lkOiBSRU1BVENIRVJfTUVOVUlEICsgZWxlbWVudC5pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogZWxlbWVudC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VfcGF0aDogTkVKLlAoXCJubS54XCIpLlpwKFwiaWNuX2xpc3RcIiksXHJcbiAgICAgICAgICAgICAgICBpbWFnZV9jb2xvcjogZ2V0SW1hZ2VDb2xvcigpLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtZW51OiAhMCxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogITFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coZ2V0SW1hZ2VDb2xvcigpKVxyXG4gICAgICAgIGNoaWxkcmVuUi5wdXNoKHtcclxuICAgICAgICAgICAgc2VwYXJhdG9yOiB0cnVlLFxyXG4gICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiXHU4M0RDXHU1MzU1XHU5ODc5XCIsXHJcbiAgICAgICAgICAgIG1lbnVfaWQ6IFwiMFwiLFxyXG4gICAgICAgICAgICBtZW51OiAhMCxcclxuICAgICAgICAgICAgY2hpbGRyZW46IG51bGwsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjaGlsZHJlblIucHVzaCh7XHJcbiAgICAgICAgICAgIG1lbnVfaWQ6IDExMTExMSxcclxuICAgICAgICAgICAgdGV4dDogXCJcdTUzRTZcdTU5MTZcdTkwMDlcdTYyRTlcIixcclxuICAgICAgICAgICAgaW1hZ2VfcGF0aDogTkVKLlAoXCJubS54XCIpLlpwKFwiaWNuX2xvb2tmb3JcIiksXHJcbiAgICAgICAgICAgIGltYWdlX2NvbG9yOiBnZXRJbWFnZUNvbG9yKCksXHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgbWVudTogITAsXHJcbiAgICAgICAgICAgIHNlcGFyYXRvcjogITEsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gY2hpbGRyZW5SXHJcbiAgICB9XHJcbn0pKCkiXSwKICAibWFwcGluZ3MiOiAiOztBQUFBLEdBQUMsTUFBTTtBQUNILFdBQU8sbUJBQW1CLElBQUksU0FB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
