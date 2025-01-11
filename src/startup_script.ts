(() => {
    window["rematcher_rematch"] = function (songId: number, adjustedSongId: number) {
        function onloadCallback() {
            console.group(`Rematcher_main_success:(${songId}->${adjustedSongId})`)
            console.log(this)
            console.log(arguments)
            console.groupEnd()
        }
        function onerrorCallback() {
            console.group(`Rematcher_main_failed:(${songId}->${adjustedSongId})`)
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
                    songId: songId,
                    adjustSongId: adjustedSongId
                },
                onload: onloadCallback,
                onerror: onerrorCallback
            })
    }
    window["rematcher_cloudsearch"] = function (queryString: string): Promise<any> {
        console.log(`cloudsearch_main(${queryString})`)
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
        function getImageColor(): string {
            function getMaterialColorIfPresent(): string {
                const color = window.getComputedStyle(document.body).getPropertyValue('--md-accent-color');
                if (color == "") return null;
                const rgb = color.match(/\d+/g);
                const bgr = rgb.reverse();
                return bgr.map((v) => parseInt(v).toString(16).padStart(2, '0')).join('');
            }
            var o = ctl.skin.At().selected,
                i = "default" == o.type && "default" == o.name,
                mac = getMaterialColorIfPresent();
            if (mac) {
                return `#${mac}`
            } else {
                return i ? "#ffd6d6dc" : "#ff474747"
            }
        }
        const REMATCHER_MENUID = "rematcher-"
        let childrenR = []
        for (let index = 0; index < result.total; index++) {
            const element = result.list[index];
            childrenR.push({
                menu_id: REMATCHER_MENUID + element.id.toString(),
                text: element.name,
                image_path: NEJ.P("nm.x").Zp("icn_list"),
                image_color: getImageColor(),
                enable: true,
                children: null,
                menu: !0,
                separator: !1
            })
        }
        console.log(getImageColor())
        childrenR.push({
            separator: true,
            enable: true,
            text: "菜单项",
            menu_id: "0",
            menu: !0,
            children: null,
        })
        childrenR.push({
            menu_id: 111111,
            text: "另外选择",
            image_path: NEJ.P("nm.x").Zp("icn_lookfor"),
            image_color: getImageColor(),
            enable: true,
            menu: !0,
            separator: !1,
            children: null
        })
        return childrenR
    }
})()