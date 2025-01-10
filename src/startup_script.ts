(() => {
    window["rematcher_rematch"] = function (songId: number, adjustedSongId: number) {
        function onloadCallback() {
            console.group(`Rematcher_startup_success:(${songId}->${adjustedSongId})`)
            console.log(this)
            console.log(arguments)
            console.groupEnd()
        }
        function onerrorCallback() {
            console.group(`Rematcher_startup_failed:(${songId}->${adjustedSongId})`)
            console.error(this)
            console.error(arguments)
            console.groupEnd()
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
            })
    }
    window["rematcher_cloudsearch"] = function (queryString: string): Promise<any> {
        console.log(`cloudsearch_startup(${queryString})`)
        return new Promise((resolve, reject) => {
            function injectedCallback(data) {
                console.log(`Resolved cloudsearch(arg: ${queryString}):`, data)
                resolve(data)
            }
            let userid = localCache.Du("host.profile.userId")
            let limitNumber = 3
            var queryData = {
                data: { uid: userid, offset: 0, total: true, limit: limitNumber, keyword: queryString },
                ext: {},
                key: `track_cloud_search-${userid}-${queryString}`,
                limit: limitNumber,
                offset: 0,
                onload: injectedCallback,
                rkey: `r-track_cloud_search-${userid}-${queryString}-0-${limitNumber}`,
            }
            window.ctl.player.AJ[0].MF.$i(queryData)
            window.ctl.player.AJ[0].MF.Ge("doloadlist", queryData)
        })
    }
    window["rematcher_combinecolumn"] = function (result) {
        const REMATCHER_MENUID = "rematcher-"
        let childrenR = []
        for (let index = 0; index < result.total; index++) {
            const element = result.list[index];
            childrenR.push({
                menu_id: REMATCHER_MENUID + element.id,
                text: element.name,
                image_path: NEJ.P("nm.x").Zp("icn_list")
            })
        }
        childrenR.push({
            separator: true,
            enable: true
        })
        childrenR.push({
            menu_id: 44666,
            text: "另外选择"
        })
        return childrenR
    }
})()