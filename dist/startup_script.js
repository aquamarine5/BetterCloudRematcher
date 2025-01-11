(() => {
  // src/startup_script.ts
  (() => {
    window["rematcher_rematch"] = function(songId, adjustedSongId) {
      function onloadCallback() {
        console.group(`Rematcher_startup_success:(${songId}->${adjustedSongId})`);
        console.log(this);
        console.log(arguments);
        console.groupEnd();
      }
      function onerrorCallback() {
        console.group(`Rematcher_startup_failed:(${songId}->${adjustedSongId})`);
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
            songId: 2629531019,
            adjustSongId: 65536
          },
          onload: onloadCallback,
          onerror: onerrorCallback
        }
      );
    };
    window["rematcher_cloudsearch"] = function(queryString) {
      console.log(`cloudsearch_startup(${queryString})`);
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
      const REMATCHER_MENUID = "rematcher-";
      let childrenR = [];
      for (let index = 0; index < result.total; index++) {
        const element = result.list[index];
        childrenR.push({
          menu_id: REMATCHER_MENUID + element.id,
          text: element.name,
          image_path: NEJ.P("nm.x").Zp("icn_list")
        });
      }
      childrenR.push({
        separator: true,
        enable: true
      });
      childrenR.push({
        menu_id: 44666,
        text: "\u53E6\u5916\u9009\u62E9"
      });
      return childrenR;
    };
  })();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3N0YXJ0dXBfc2NyaXB0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoKCkgPT4ge1xyXG4gICAgd2luZG93W1wicmVtYXRjaGVyX3JlbWF0Y2hcIl0gPSBmdW5jdGlvbiAoc29uZ0lkOiBudW1iZXIsIGFkanVzdGVkU29uZ0lkOiBudW1iZXIpIHtcclxuICAgICAgICBmdW5jdGlvbiBvbmxvYWRDYWxsYmFjaygpIHtcclxuICAgICAgICAgICAgY29uc29sZS5ncm91cChgUmVtYXRjaGVyX3N0YXJ0dXBfc3VjY2VzczooJHtzb25nSWR9LT4ke2FkanVzdGVkU29uZ0lkfSlgKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBvbmVycm9yQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoYFJlbWF0Y2hlcl9zdGFydHVwX2ZhaWxlZDooJHtzb25nSWR9LT4ke2FkanVzdGVkU29uZ0lkfSlgKVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMpXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYXJndW1lbnRzKVxyXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgICAgICB9XHJcbiAgICAgICAgTkVKLlAoXCJuZWoualwiKS5SdShcclxuICAgICAgICAgICAgXCJcIi5jb25jYXQoQVBQX0NPTkYuZG9tYWluLCBcIi9hcGkvY2xvdWQvdXNlci9zb25nL21hdGNoXCIpLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBsb2NhbENhY2hlLkR1KFwiaG9zdC5wcm9maWxlLnVzZXJJZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBzb25nSWQ6IDI2Mjk1MzEwMTksXHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0U29uZ0lkOiA2NTUzNlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9ubG9hZDogb25sb2FkQ2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICBvbmVycm9yOiBvbmVycm9yQ2FsbGJhY2tcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHdpbmRvd1tcInJlbWF0Y2hlcl9jbG91ZHNlYXJjaFwiXSA9IGZ1bmN0aW9uIChxdWVyeVN0cmluZzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgY2xvdWRzZWFyY2hfc3RhcnR1cCgke3F1ZXJ5U3RyaW5nfSlgKVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGluamVjdGVkQ2FsbGJhY2soZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlc29sdmVkIGNsb3Vkc2VhcmNoKGFyZzogJHtxdWVyeVN0cmluZ30pOmAsIGRhdGEpXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHVzZXJpZCA9IGxvY2FsQ2FjaGUuRHUoXCJob3N0LnByb2ZpbGUudXNlcklkXCIpXHJcbiAgICAgICAgICAgIGxldCBsaW1pdE51bWJlciA9IDNcclxuICAgICAgICAgICAgdmFyIHF1ZXJ5RGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgdWlkOiB1c2VyaWQsIG9mZnNldDogMCwgdG90YWw6IHRydWUsIGxpbWl0OiBsaW1pdE51bWJlciwga2V5d29yZDogcXVlcnlTdHJpbmcgfSxcclxuICAgICAgICAgICAgICAgIGV4dDoge30sXHJcbiAgICAgICAgICAgICAgICBrZXk6IGB0cmFja19jbG91ZF9zZWFyY2gtJHt1c2VyaWR9LSR7cXVlcnlTdHJpbmd9YCxcclxuICAgICAgICAgICAgICAgIGxpbWl0OiBsaW1pdE51bWJlcixcclxuICAgICAgICAgICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICAgICAgICAgIG9ubG9hZDogaW5qZWN0ZWRDYWxsYmFjayxcclxuICAgICAgICAgICAgICAgIHJrZXk6IGByLXRyYWNrX2Nsb3VkX3NlYXJjaC0ke3VzZXJpZH0tJHtxdWVyeVN0cmluZ30tMC0ke2xpbWl0TnVtYmVyfWAsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmN0bC5wbGF5ZXIuQUpbMF0uTUYuJGkocXVlcnlEYXRhKVxyXG4gICAgICAgICAgICB3aW5kb3cuY3RsLnBsYXllci5BSlswXS5NRi5HZShcImRvbG9hZGxpc3RcIiwgcXVlcnlEYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB3aW5kb3dbXCJyZW1hdGNoZXJfY29tYmluZWNvbHVtblwiXSA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICBjb25zdCBSRU1BVENIRVJfTUVOVUlEID0gXCJyZW1hdGNoZXItXCJcclxuICAgICAgICBsZXQgY2hpbGRyZW5SID0gW11cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVzdWx0LnRvdGFsOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZXN1bHQubGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgIGNoaWxkcmVuUi5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG1lbnVfaWQ6IFJFTUFUQ0hFUl9NRU5VSUQgKyBlbGVtZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogZWxlbWVudC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VfcGF0aDogTkVKLlAoXCJubS54XCIpLlpwKFwiaWNuX2xpc3RcIilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hpbGRyZW5SLnB1c2goe1xyXG4gICAgICAgICAgICBzZXBhcmF0b3I6IHRydWUsXHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY2hpbGRyZW5SLnB1c2goe1xyXG4gICAgICAgICAgICBtZW51X2lkOiA0NDY2NixcclxuICAgICAgICAgICAgdGV4dDogXCJcdTUzRTZcdTU5MTZcdTkwMDlcdTYyRTlcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuUlxyXG4gICAgfVxyXG59KSgpIl0sCiAgIm1hcHBpbmdzIjogIjs7QUFBQSxHQUFDLE1BQU07QUFDSCxXQUFPLG1CQUFtQixJQUFJLFNBQVUsUUFBZ0IsZ0JBQXdCO0FBQzVFLGVBQVMsaUJBQWlCO0FBQ3RCLGdCQUFRLE1BQU0sOEJBQThCLFdBQVcsaUJBQWlCO0FBQ3hFLGdCQUFRLElBQUksSUFBSTtBQUNoQixnQkFBUSxJQUFJLFNBQVM7QUFDckIsZ0JBQVEsU0FBUztBQUFBLE1BQ3JCO0FBQ0EsZUFBUyxrQkFBa0I7QUFDdkIsZ0JBQVEsTUFBTSw2QkFBNkIsV0FBVyxpQkFBaUI7QUFDdkUsZ0JBQVEsTUFBTSxJQUFJO0FBQ2xCLGdCQUFRLE1BQU0sU0FBUztBQUN2QixnQkFBUSxTQUFTO0FBQUEsTUFDckI7QUFDQSxVQUFJLEVBQUUsT0FBTyxFQUFFO0FBQUEsUUFDWCxHQUFHLE9BQU8sU0FBUyxRQUFRLDRCQUE0QjtBQUFBLFFBQ3ZEO0FBQUEsVUFDSSxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDSCxRQUFRLFdBQVcsR0FBRyxxQkFBcUI7QUFBQSxZQUMzQyxRQUFRO0FBQUEsWUFDUixjQUFjO0FBQUEsVUFDbEI7QUFBQSxVQUNBLFFBQVE7QUFBQSxVQUNSLFNBQVM7QUFBQSxRQUNiO0FBQUEsTUFBQztBQUFBLElBQ1Q7QUFDQSxXQUFPLHVCQUF1QixJQUFJLFNBQVUsYUFBbUM7QUFDM0UsY0FBUSxJQUFJLHVCQUF1QixjQUFjO0FBQ2pELGFBQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQ3BDLGlCQUFTLGlCQUFpQixNQUFNO0FBQzVCLGtCQUFRLElBQUksNkJBQTZCLGlCQUFpQixJQUFJO0FBQzlELGtCQUFRLElBQUk7QUFBQSxRQUNoQjtBQUNBLFlBQUksU0FBUyxXQUFXLEdBQUcscUJBQXFCO0FBQ2hELFlBQUksY0FBYztBQUNsQixZQUFJLFlBQVk7QUFBQSxVQUNaLE1BQU0sRUFBRSxLQUFLLFFBQVEsUUFBUSxHQUFHLE9BQU8sTUFBTSxPQUFPLGFBQWEsU0FBUyxZQUFZO0FBQUEsVUFDdEYsS0FBSyxDQUFDO0FBQUEsVUFDTixLQUFLLHNCQUFzQixVQUFVO0FBQUEsVUFDckMsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFVBQ1IsUUFBUTtBQUFBLFVBQ1IsTUFBTSx3QkFBd0IsVUFBVSxpQkFBaUI7QUFBQSxRQUM3RDtBQUNBLGVBQU8sSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxTQUFTO0FBQ3ZDLGVBQU8sSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxjQUFjLFNBQVM7QUFBQSxNQUN6RCxDQUFDO0FBQUEsSUFDTDtBQUNBLFdBQU8seUJBQXlCLElBQUksU0FBVSxRQUFRO0FBQ2xELFlBQU0sbUJBQW1CO0FBQ3pCLFVBQUksWUFBWSxDQUFDO0FBQ2pCLGVBQVMsUUFBUSxHQUFHLFFBQVEsT0FBTyxPQUFPLFNBQVM7QUFDL0MsY0FBTSxVQUFVLE9BQU8sS0FBSyxLQUFLO0FBQ2pDLGtCQUFVLEtBQUs7QUFBQSxVQUNYLFNBQVMsbUJBQW1CLFFBQVE7QUFBQSxVQUNwQyxNQUFNLFFBQVE7QUFBQSxVQUNkLFlBQVksSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLFVBQVU7QUFBQSxRQUMzQyxDQUFDO0FBQUEsTUFDTDtBQUNBLGdCQUFVLEtBQUs7QUFBQSxRQUNYLFdBQVc7QUFBQSxRQUNYLFFBQVE7QUFBQSxNQUNaLENBQUM7QUFDRCxnQkFBVSxLQUFLO0FBQUEsUUFDWCxTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsTUFDVixDQUFDO0FBQ0QsYUFBTztBQUFBLElBQ1g7QUFBQSxFQUNKLEdBQUc7IiwKICAibmFtZXMiOiBbXQp9Cg==
