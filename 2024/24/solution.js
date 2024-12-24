const fs = require('fs')
if (!globalThis.window) globalThis.window = globalThis
;(() => {

  // GRAPHVIZ SOLUTION
  // https://dreampuf.github.io/GraphvizOnline/?engine=dot#digraph%20G%20%7B%0Ajjw%20%5Blabel%3D%22jjw%20AND%22%5D%0Afcw%20-%3E%20jjw%0Ahrn%20-%3E%20jjw%0Arjs%20%5Blabel%3D%22rjs%20AND%22%5D%0Arhr%20-%3E%20rjs%0Agwd%20-%3E%20rjs%0Anpf%20%5Blabel%3D%22npf%20XOR%22%5D%0Ay24%20-%3E%20npf%0Ax24%20-%3E%20npf%0Az11%20%5Blabel%3D%22z11%20XOR%22%5D%0Atnj%20-%3E%20z11%0Aqqn%20-%3E%20z11%0Ajrv%20%5Blabel%3D%22jrv%20OR%22%5D%0Ajfr%20-%3E%20jrv%0Aqhf%20-%3E%20jrv%0Agdr%20%5Blabel%3D%22gdr%20AND%22%5D%0Afgc%20-%3E%20gdr%0Awhc%20-%3E%20gdr%0Ammh%20%5Blabel%3D%22mmh%20AND%22%5D%0Adqm%20-%3E%20mmh%0Adfw%20-%3E%20mmh%0Arqg%20%5Blabel%3D%22rqg%20XOR%22%5D%0Ay08%20-%3E%20rqg%0Ax08%20-%3E%20rqg%0Az03%20%5Blabel%3D%22z03%20XOR%22%5D%0Awvr%20-%3E%20z03%0Asfq%20-%3E%20z03%0Anbq%20%5Blabel%3D%22nbq%20XOR%22%5D%0Ay26%20-%3E%20nbq%0Ax26%20-%3E%20nbq%0Anvk%20%5Blabel%3D%22nvk%20XOR%22%5D%0Ax10%20-%3E%20nvk%0Ay10%20-%3E%20nvk%0Az09%20%5Blabel%3D%22z09%20XOR%22%5D%0Arnc%20-%3E%20z09%0Arnf%20-%3E%20z09%0Atsk%20%5Blabel%3D%22tsk%20AND%22%5D%0Adws%20-%3E%20tsk%0Ajkb%20-%3E%20tsk%0Ahss%20%5Blabel%3D%22hss%20AND%22%5D%0Ax34%20-%3E%20hss%0Ay34%20-%3E%20hss%0Acfb%20%5Blabel%3D%22cfb%20OR%22%5D%0Agkc%20-%3E%20cfb%0Atff%20-%3E%20cfb%0Abqr%20%5Blabel%3D%22bqr%20OR%22%5D%0Ammh%20-%3E%20bqr%0Avhw%20-%3E%20bqr%0Agkc%20%5Blabel%3D%22gkc%20AND%22%5D%0Avdj%20-%3E%20gkc%0Ahvq%20-%3E%20gkc%0Apfd%20%5Blabel%3D%22pfd%20OR%22%5D%0Akfp%20-%3E%20pfd%0Ahss%20-%3E%20pfd%0Ajhc%20%5Blabel%3D%22jhc%20AND%22%5D%0Ahbg%20-%3E%20jhc%0Arwk%20-%3E%20jhc%0Atbv%20%5Blabel%3D%22tbv%20AND%22%5D%0Ay42%20-%3E%20tbv%0Ax42%20-%3E%20tbv%0Aqjk%20%5Blabel%3D%22qjk%20OR%22%5D%0Ahgm%20-%3E%20qjk%0Agwk%20-%3E%20qjk%0Afsf%20%5Blabel%3D%22fsf%20AND%22%5D%0Ajmr%20-%3E%20fsf%0Aqts%20-%3E%20fsf%0Az16%20%5Blabel%3D%22z16%20XOR%22%5D%0Aprk%20-%3E%20z16%0Ahsj%20-%3E%20z16%0Awct%20%5Blabel%3D%22wct%20XOR%22%5D%0Ay22%20-%3E%20wct%0Ax22%20-%3E%20wct%0Anbs%20%5Blabel%3D%22nbs%20OR%22%5D%0Ajwd%20-%3E%20nbs%0Afvv%20-%3E%20nbs%0Akhc%20%5Blabel%3D%22khc%20OR%22%5D%0Ackj%20-%3E%20khc%0Akjg%20-%3E%20khc%0Az33%20%5Blabel%3D%22z33%20XOR%22%5D%0Adgr%20-%3E%20z33%0Arrd%20-%3E%20z33%0Anjb%20%5Blabel%3D%22njb%20AND%22%5D%0Ax00%20-%3E%20njb%0Ay00%20-%3E%20njb%0Admd%20%5Blabel%3D%22dmd%20AND%22%5D%0Ax08%20-%3E%20dmd%0Ay08%20-%3E%20dmd%0Aknn%20%5Blabel%3D%22knn%20AND%22%5D%0Ay15%20-%3E%20knn%0Ax15%20-%3E%20knn%0Az29%20%5Blabel%3D%22z29%20XOR%22%5D%0Avkb%20-%3E%20z29%0Ajfk%20-%3E%20z29%0Avvm%20%5Blabel%3D%22vvm%20AND%22%5D%0Ay33%20-%3E%20vvm%0Ax33%20-%3E%20vvm%0Az42%20%5Blabel%3D%22z42%20XOR%22%5D%0Akjp%20-%3E%20z42%0Anmj%20-%3E%20z42%0Avvh%20%5Blabel%3D%22vvh%20XOR%22%5D%0Ay02%20-%3E%20vvh%0Ax02%20-%3E%20vvh%0Abvf%20%5Blabel%3D%22bvf%20OR%22%5D%0Amgf%20-%3E%20bvf%0Adqq%20-%3E%20bvf%0Atvn%20%5Blabel%3D%22tvn%20AND%22%5D%0Asnd%20-%3E%20tvn%0Asdf%20-%3E%20tvn%0Acvg%20%5Blabel%3D%22cvg%20OR%22%5D%0Arjd%20-%3E%20cvg%0Atbv%20-%3E%20cvg%0Az06%20%5Blabel%3D%22z06%20XOR%22%5D%0Aghp%20-%3E%20z06%0Atjc%20-%3E%20z06%0Arjd%20%5Blabel%3D%22rjd%20AND%22%5D%0Akjp%20-%3E%20rjd%0Anmj%20-%3E%20rjd%0Askg%20%5Blabel%3D%22skg%20OR%22%5D%0Ambg%20-%3E%20skg%0Aggm%20-%3E%20skg%0Ajkb%20%5Blabel%3D%22jkb%20OR%22%5D%0Awjd%20-%3E%20jkb%0Adtv%20-%3E%20jkb%0Adrs%20%5Blabel%3D%22drs%20XOR%22%5D%0Ax43%20-%3E%20drs%0Ay43%20-%3E%20drs%0Adqq%20%5Blabel%3D%22dqq%20AND%22%5D%0Aqjk%20-%3E%20dqq%0Afck%20-%3E%20dqq%0Adws%20%5Blabel%3D%22dws%20XOR%22%5D%0Ax38%20-%3E%20dws%0Ay38%20-%3E%20dws%0Ahfp%20%5Blabel%3D%22hfp%20AND%22%5D%0Atkb%20-%3E%20hfp%0Anjb%20-%3E%20hfp%0Az24%20%5Blabel%3D%22z24%20XOR%22%5D%0Apdf%20-%3E%20z24%0Anpf%20-%3E%20z24%0Akvv%20%5Blabel%3D%22kvv%20XOR%22%5D%0Ax36%20-%3E%20kvv%0Ay36%20-%3E%20kvv%0Avhd%20%5Blabel%3D%22vhd%20AND%22%5D%0Ax41%20-%3E%20vhd%0Ay41%20-%3E%20vhd%0Aknm%20%5Blabel%3D%22knm%20OR%22%5D%0Avjw%20-%3E%20knm%0Ahfp%20-%3E%20knm%0Ahgw%20%5Blabel%3D%22hgw%20OR%22%5D%0Akgm%20-%3E%20hgw%0Ankt%20-%3E%20hgw%0Atff%20%5Blabel%3D%22tff%20AND%22%5D%0Ay07%20-%3E%20tff%0Ax07%20-%3E%20tff%0Antr%20%5Blabel%3D%22ntr%20OR%22%5D%0Ajjw%20-%3E%20ntr%0Ajvf%20-%3E%20ntr%0Ahbg%20%5Blabel%3D%22hbg%20XOR%22%5D%0Ax41%20-%3E%20hbg%0Ay41%20-%3E%20hbg%0Adfw%20%5Blabel%3D%22dfw%20XOR%22%5D%0Ax39%20-%3E%20dfw%0Ay39%20-%3E%20dfw%0Avwd%20%5Blabel%3D%22vwd%20AND%22%5D%0Ax25%20-%3E%20vwd%0Ay25%20-%3E%20vwd%0Az32%20%5Blabel%3D%22z32%20XOR%22%5D%0Adtp%20-%3E%20z32%0Ahdp%20-%3E%20z32%0Arsj%20%5Blabel%3D%22rsj%20XOR%22%5D%0Ax19%20-%3E%20rsj%0Ay19%20-%3E%20rsj%0Atdb%20%5Blabel%3D%22tdb%20AND%22%5D%0Ay43%20-%3E%20tdb%0Ax43%20-%3E%20tdb%0Amgj%20%5Blabel%3D%22mgj%20XOR%22%5D%0Ax05%20-%3E%20mgj%0Ay05%20-%3E%20mgj%0Avjw%20%5Blabel%3D%22vjw%20AND%22%5D%0Ay01%20-%3E%20vjw%0Ax01%20-%3E%20vjw%0Awpm%20%5Blabel%3D%22wpm%20XOR%22%5D%0Ay20%20-%3E%20wpm%0Ax20%20-%3E%20wpm%0Az36%20%5Blabel%3D%22z36%20XOR%22%5D%0Ambs%20-%3E%20z36%0Akvv%20-%3E%20z36%0Akfp%20%5Blabel%3D%22kfp%20AND%22%5D%0Awrd%20-%3E%20kfp%0Adjc%20-%3E%20kfp%0Atkb%20%5Blabel%3D%22tkb%20XOR%22%5D%0Ax01%20-%3E%20tkb%0Ay01%20-%3E%20tkb%0Adtw%20%5Blabel%3D%22dtw%20OR%22%5D%0Agdr%20-%3E%20dtw%0Awfh%20-%3E%20dtw%0Ambg%20%5Blabel%3D%22mbg%20AND%22%5D%0Awct%20-%3E%20mbg%0Anbs%20-%3E%20mbg%0Anjh%20%5Blabel%3D%22njh%20AND%22%5D%0Aqqn%20-%3E%20njh%0Atnj%20-%3E%20njh%0Afnw%20%5Blabel%3D%22fnw%20XOR%22%5D%0Ax17%20-%3E%20fnw%0Ay17%20-%3E%20fnw%0Armd%20%5Blabel%3D%22rmd%20AND%22%5D%0Arnf%20-%3E%20rmd%0Arnc%20-%3E%20rmd%0Akvj%20%5Blabel%3D%22kvj%20AND%22%5D%0Abbn%20-%3E%20kvj%0Akhc%20-%3E%20kvj%0Aqhs%20%5Blabel%3D%22qhs%20AND%22%5D%0Ax02%20-%3E%20qhs%0Ay02%20-%3E%20qhs%0Az23%20%5Blabel%3D%22z23%20XOR%22%5D%0Askg%20-%3E%20z23%0Abkg%20-%3E%20z23%0Az40%20%5Blabel%3D%22z40%20XOR%22%5D%0Agdf%20-%3E%20z40%0Abqr%20-%3E%20z40%0Ahgt%20%5Blabel%3D%22hgt%20AND%22%5D%0Arqg%20-%3E%20hgt%0Acfb%20-%3E%20hgt%0Akbf%20%5Blabel%3D%22kbf%20XOR%22%5D%0Ax27%20-%3E%20kbf%0Ay27%20-%3E%20kbf%0Aqkt%20%5Blabel%3D%22qkt%20AND%22%5D%0Agdv%20-%3E%20qkt%0Ahkd%20-%3E%20qkt%0Ackj%20%5Blabel%3D%22ckj%20AND%22%5D%0Ax14%20-%3E%20ckj%0Ay14%20-%3E%20ckj%0Aprk%20%5Blabel%3D%22prk%20OR%22%5D%0Akvj%20-%3E%20prk%0Aknn%20-%3E%20prk%0Adtp%20%5Blabel%3D%22dtp%20OR%22%5D%0Atvn%20-%3E%20dtp%0Arhk%20-%3E%20dtp%0Az13%20%5Blabel%3D%22z13%20XOR%22%5D%0Afgc%20-%3E%20z13%0Awhc%20-%3E%20z13%0Arhr%20%5Blabel%3D%22rhr%20OR%22%5D%0Amjs%20-%3E%20rhr%0Acwb%20-%3E%20rhr%0Atjm%20%5Blabel%3D%22tjm%20AND%22%5D%0Ax09%20-%3E%20tjm%0Ay09%20-%3E%20tjm%0Az45%20%5Blabel%3D%22z45%20OR%22%5D%0Awpb%20-%3E%20z45%0Afbj%20-%3E%20z45%0Agsv%20%5Blabel%3D%22gsv%20AND%22%5D%0Ay23%20-%3E%20gsv%0Ax23%20-%3E%20gsv%0Acmd%20%5Blabel%3D%22cmd%20XOR%22%5D%0Ax25%20-%3E%20cmd%0Ay25%20-%3E%20cmd%0Az43%20%5Blabel%3D%22z43%20XOR%22%5D%0Adrs%20-%3E%20z43%0Acvg%20-%3E%20z43%0Awhc%20%5Blabel%3D%22whc%20XOR%22%5D%0Ax13%20-%3E%20whc%0Ay13%20-%3E%20whc%0Awpt%20%5Blabel%3D%22wpt%20OR%22%5D%0Avwd%20-%3E%20wpt%0Aqbc%20-%3E%20wpt%0Az02%20%5Blabel%3D%22z02%20XOR%22%5D%0Aknm%20-%3E%20z02%0Avvh%20-%3E%20z02%0Ajvf%20%5Blabel%3D%22jvf%20AND%22%5D%0Ay18%20-%3E%20jvf%0Ax18%20-%3E%20jvf%0Abkg%20%5Blabel%3D%22bkg%20XOR%22%5D%0Ay23%20-%3E%20bkg%0Ax23%20-%3E%20bkg%0Afbj%20%5Blabel%3D%22fbj%20AND%22%5D%0Anfm%20-%3E%20fbj%0Anww%20-%3E%20fbj%0Az28%20%5Blabel%3D%22z28%20XOR%22%5D%0Arhr%20-%3E%20z28%0Agwd%20-%3E%20z28%0Ahvq%20%5Blabel%3D%22hvq%20OR%22%5D%0Afvf%20-%3E%20hvq%0Ancn%20-%3E%20hvq%0Az08%20%5Blabel%3D%22z08%20XOR%22%5D%0Acfb%20-%3E%20z08%0Arqg%20-%3E%20z08%0Atsf%20%5Blabel%3D%22tsf%20OR%22%5D%0Abjh%20-%3E%20tsf%0Abcf%20-%3E%20tsf%0Az10%20%5Blabel%3D%22z10%20XOR%22%5D%0Adnm%20-%3E%20z10%0Anvk%20-%3E%20z10%0Adgr%20%5Blabel%3D%22dgr%20XOR%22%5D%0Ay33%20-%3E%20dgr%0Ax33%20-%3E%20dgr%0Awfh%20%5Blabel%3D%22wfh%20AND%22%5D%0Ay13%20-%3E%20wfh%0Ax13%20-%3E%20wfh%0Akgm%20%5Blabel%3D%22kgm%20AND%22%5D%0Awpt%20-%3E%20kgm%0Anbq%20-%3E%20kgm%0Anww%20%5Blabel%3D%22nww%20XOR%22%5D%0Ay44%20-%3E%20nww%0Ax44%20-%3E%20nww%0Az41%20%5Blabel%3D%22z41%20XOR%22%5D%0Ahbg%20-%3E%20z41%0Arwk%20-%3E%20z41%0Adnm%20%5Blabel%3D%22dnm%20OR%22%5D%0Atjm%20-%3E%20dnm%0Armd%20-%3E%20dnm%0Ancn%20%5Blabel%3D%22ncn%20AND%22%5D%0Ay06%20-%3E%20ncn%0Ax06%20-%3E%20ncn%0Aggm%20%5Blabel%3D%22ggm%20AND%22%5D%0Ay22%20-%3E%20ggm%0Ax22%20-%3E%20ggm%0Ahgm%20%5Blabel%3D%22hgm%20AND%22%5D%0Asfq%20-%3E%20hgm%0Awvr%20-%3E%20hgm%0Arsn%20%5Blabel%3D%22rsn%20AND%22%5D%0Abvf%20-%3E%20rsn%0Amgj%20-%3E%20rsn%0Afwv%20%5Blabel%3D%22fwv%20AND%22%5D%0Avvh%20-%3E%20fwv%0Aknm%20-%3E%20fwv%0Az20%20%5Blabel%3D%22z20%20XOR%22%5D%0Awpm%20-%3E%20z20%0Atsf%20-%3E%20z20%0Asnd%20%5Blabel%3D%22snd%20XOR%22%5D%0Ay31%20-%3E%20snd%0Ax31%20-%3E%20snd%0Afck%20%5Blabel%3D%22fck%20XOR%22%5D%0Ax04%20-%3E%20fck%0Ay04%20-%3E%20fck%0Akjp%20%5Blabel%3D%22kjp%20XOR%22%5D%0Ay42%20-%3E%20kjp%0Ax42%20-%3E%20kjp%0Awng%20%5Blabel%3D%22wng%20AND%22%5D%0Adtp%20-%3E%20wng%0Ahdp%20-%3E%20wng%0Az27%20%5Blabel%3D%22z27%20XOR%22%5D%0Ahgw%20-%3E%20z27%0Akbf%20-%3E%20z27%0Afgc%20%5Blabel%3D%22fgc%20OR%22%5D%0Afsf%20-%3E%20fgc%0Anqs%20-%3E%20fgc%0Apjs%20%5Blabel%3D%22pjs%20XOR%22%5D%0Ay21%20-%3E%20pjs%0Ax21%20-%3E%20pjs%0Ajfr%20%5Blabel%3D%22jfr%20AND%22%5D%0Ax24%20-%3E%20jfr%0Ay24%20-%3E%20jfr%0Agdv%20%5Blabel%3D%22gdv%20OR%22%5D%0Awbg%20-%3E%20gdv%0Amtj%20-%3E%20gdv%0Asts%20%5Blabel%3D%22sts%20AND%22%5D%0Apfd%20-%3E%20sts%0Ahrb%20-%3E%20sts%0Az12%20%5Blabel%3D%22z12%20XOR%22%5D%0Ajmr%20-%3E%20z12%0Aqts%20-%3E%20z12%0Az00%20%5Blabel%3D%22z00%20XOR%22%5D%0Ax00%20-%3E%20z00%0Ay00%20-%3E%20z00%0Awjd%20%5Blabel%3D%22wjd%20AND%22%5D%0Abkj%20-%3E%20wjd%0Afhq%20-%3E%20wjd%0Agwc%20%5Blabel%3D%22gwc%20AND%22%5D%0Adrs%20-%3E%20gwc%0Acvg%20-%3E%20gwc%0Aghp%20%5Blabel%3D%22ghp%20OR%22%5D%0Arsn%20-%3E%20ghp%0Arfc%20-%3E%20ghp%0Arnf%20%5Blabel%3D%22rnf%20XOR%22%5D%0Ax09%20-%3E%20rnf%0Ay09%20-%3E%20rnf%0Afhq%20%5Blabel%3D%22fhq%20OR%22%5D%0Arkd%20-%3E%20fhq%0Agvm%20-%3E%20fhq%0Az01%20%5Blabel%3D%22z01%20XOR%22%5D%0Anjb%20-%3E%20z01%0Atkb%20-%3E%20z01%0Anmj%20%5Blabel%3D%22nmj%20OR%22%5D%0Ajhc%20-%3E%20nmj%0Avhd%20-%3E%20nmj%0Az14%20%5Blabel%3D%22z14%20XOR%22%5D%0Awrb%20-%3E%20z14%0Adtw%20-%3E%20z14%0Afcw%20%5Blabel%3D%22fcw%20XOR%22%5D%0Ay18%20-%3E%20fcw%0Ax18%20-%3E%20fcw%0Agpj%20%5Blabel%3D%22gpj%20AND%22%5D%0Ax11%20-%3E%20gpj%0Ay11%20-%3E%20gpj%0Atjc%20%5Blabel%3D%22tjc%20XOR%22%5D%0Ay06%20-%3E%20tjc%0Ax06%20-%3E%20tjc%0Anqs%20%5Blabel%3D%22nqs%20AND%22%5D%0Ay12%20-%3E%20nqs%0Ax12%20-%3E%20nqs%0Awbg%20%5Blabel%3D%22wbg%20AND%22%5D%0Ay29%20-%3E%20wbg%0Ax29%20-%3E%20wbg%0Ahsj%20%5Blabel%3D%22hsj%20XOR%22%5D%0Ay16%20-%3E%20hsj%0Ax16%20-%3E%20hsj%0Az26%20%5Blabel%3D%22z26%20XOR%22%5D%0Anbq%20-%3E%20z26%0Awpt%20-%3E%20z26%0Acwb%20%5Blabel%3D%22cwb%20AND%22%5D%0Ax27%20-%3E%20cwb%0Ay27%20-%3E%20cwb%0Ahrb%20%5Blabel%3D%22hrb%20XOR%22%5D%0Ay35%20-%3E%20hrb%0Ax35%20-%3E%20hrb%0Avtc%20%5Blabel%3D%22vtc%20AND%22%5D%0Adgr%20-%3E%20vtc%0Arrd%20-%3E%20vtc%0Awms%20%5Blabel%3D%22wms%20AND%22%5D%0Ay38%20-%3E%20wms%0Ax38%20-%3E%20wms%0Ahrn%20%5Blabel%3D%22hrn%20OR%22%5D%0Atqp%20-%3E%20hrn%0Amjj%20-%3E%20hrn%0Aqhf%20%5Blabel%3D%22qhf%20AND%22%5D%0Apdf%20-%3E%20qhf%0Anpf%20-%3E%20qhf%0Asdf%20%5Blabel%3D%22sdf%20OR%22%5D%0Aqkt%20-%3E%20sdf%0Aqgt%20-%3E%20sdf%0Ajvp%20%5Blabel%3D%22jvp%20AND%22%5D%0Ax28%20-%3E%20jvp%0Ay28%20-%3E%20jvp%0Avmr%20%5Blabel%3D%22vmr%20OR%22%5D%0Aqgr%20-%3E%20vmr%0Aght%20-%3E%20vmr%0Arkd%20%5Blabel%3D%22rkd%20AND%22%5D%0Ay36%20-%3E%20rkd%0Ax36%20-%3E%20rkd%0Adqm%20%5Blabel%3D%22dqm%20OR%22%5D%0Atsk%20-%3E%20dqm%0Awms%20-%3E%20dqm%0Agtw%20%5Blabel%3D%22gtw%20AND%22%5D%0Ax32%20-%3E%20gtw%0Ay32%20-%3E%20gtw%0Apdf%20%5Blabel%3D%22pdf%20OR%22%5D%0Agsv%20-%3E%20pdf%0Arvw%20-%3E%20pdf%0Atqp%20%5Blabel%3D%22tqp%20AND%22%5D%0Ay17%20-%3E%20tqp%0Ax17%20-%3E%20tqp%0Az22%20%5Blabel%3D%22z22%20XOR%22%5D%0Anbs%20-%3E%20z22%0Awct%20-%3E%20z22%0Acgn%20%5Blabel%3D%22cgn%20AND%22%5D%0Anvk%20-%3E%20cgn%0Adnm%20-%3E%20cgn%0Az21%20%5Blabel%3D%22z21%20XOR%22%5D%0Avmr%20-%3E%20z21%0Apjs%20-%3E%20z21%0Aqgr%20%5Blabel%3D%22qgr%20AND%22%5D%0Atsf%20-%3E%20qgr%0Awpm%20-%3E%20qgr%0Agwk%20%5Blabel%3D%22gwk%20AND%22%5D%0Ay03%20-%3E%20gwk%0Ax03%20-%3E%20gwk%0Anpt%20%5Blabel%3D%22npt%20AND%22%5D%0Abqr%20-%3E%20npt%0Agdf%20-%3E%20npt%0Ankt%20%5Blabel%3D%22nkt%20AND%22%5D%0Ay26%20-%3E%20nkt%0Ax26%20-%3E%20nkt%0Az19%20%5Blabel%3D%22z19%20XOR%22%5D%0Arsj%20-%3E%20z19%0Antr%20-%3E%20z19%0Abcf%20%5Blabel%3D%22bcf%20AND%22%5D%0Ay19%20-%3E%20bcf%0Ax19%20-%3E%20bcf%0Abjh%20%5Blabel%3D%22bjh%20AND%22%5D%0Arsj%20-%3E%20bjh%0Antr%20-%3E%20bjh%0Az30%20%5Blabel%3D%22z30%20XOR%22%5D%0Ahkd%20-%3E%20z30%0Agdv%20-%3E%20z30%0Amtj%20%5Blabel%3D%22mtj%20AND%22%5D%0Ajfk%20-%3E%20mtj%0Avkb%20-%3E%20mtj%0Arnc%20%5Blabel%3D%22rnc%20OR%22%5D%0Admd%20-%3E%20rnc%0Ahgt%20-%3E%20rnc%0Agfs%20%5Blabel%3D%22gfs%20AND%22%5D%0Ax16%20-%3E%20gfs%0Ay16%20-%3E%20gfs%0Amgf%20%5Blabel%3D%22mgf%20AND%22%5D%0Ax04%20-%3E%20mgf%0Ay04%20-%3E%20mgf%0Agdf%20%5Blabel%3D%22gdf%20XOR%22%5D%0Ax40%20-%3E%20gdf%0Ay40%20-%3E%20gdf%0Amvg%20%5Blabel%3D%22mvg%20AND%22%5D%0Ay10%20-%3E%20mvg%0Ax10%20-%3E%20mvg%0Arfc%20%5Blabel%3D%22rfc%20AND%22%5D%0Ay05%20-%3E%20rfc%0Ax05%20-%3E%20rfc%0Asfq%20%5Blabel%3D%22sfq%20XOR%22%5D%0Ay03%20-%3E%20sfq%0Ax03%20-%3E%20sfq%0Agwd%20%5Blabel%3D%22gwd%20XOR%22%5D%0Ax28%20-%3E%20gwd%0Ay28%20-%3E%20gwd%0Az34%20%5Blabel%3D%22z34%20XOR%22%5D%0Awrd%20-%3E%20z34%0Adjc%20-%3E%20z34%0Adtv%20%5Blabel%3D%22dtv%20AND%22%5D%0Ax37%20-%3E%20dtv%0Ay37%20-%3E%20dtv%0Az07%20%5Blabel%3D%22z07%20XOR%22%5D%0Avdj%20-%3E%20z07%0Ahvq%20-%3E%20z07%0Ajmr%20%5Blabel%3D%22jmr%20OR%22%5D%0Agpj%20-%3E%20jmr%0Anjh%20-%3E%20jmr%0Az38%20%5Blabel%3D%22z38%20XOR%22%5D%0Adws%20-%3E%20z38%0Ajkb%20-%3E%20z38%0Awrd%20%5Blabel%3D%22wrd%20OR%22%5D%0Avvm%20-%3E%20wrd%0Avtc%20-%3E%20wrd%0Ajfk%20%5Blabel%3D%22jfk%20OR%22%5D%0Ajvp%20-%3E%20jfk%0Arjs%20-%3E%20jfk%0Abbn%20%5Blabel%3D%22bbn%20XOR%22%5D%0Ay15%20-%3E%20bbn%0Ax15%20-%3E%20bbn%0Adjc%20%5Blabel%3D%22djc%20XOR%22%5D%0Ay34%20-%3E%20djc%0Ax34%20-%3E%20djc%0Avdj%20%5Blabel%3D%22vdj%20XOR%22%5D%0Ay07%20-%3E%20vdj%0Ax07%20-%3E%20vdj%0Arwk%20%5Blabel%3D%22rwk%20OR%22%5D%0Ankg%20-%3E%20rwk%0Anpt%20-%3E%20rwk%0Amjs%20%5Blabel%3D%22mjs%20AND%22%5D%0Ahgw%20-%3E%20mjs%0Akbf%20-%3E%20mjs%0Aqts%20%5Blabel%3D%22qts%20XOR%22%5D%0Ay12%20-%3E%20qts%0Ax12%20-%3E%20qts%0Arrd%20%5Blabel%3D%22rrd%20OR%22%5D%0Awng%20-%3E%20rrd%0Agtw%20-%3E%20rrd%0Az25%20%5Blabel%3D%22z25%20XOR%22%5D%0Ajrv%20-%3E%20z25%0Acmd%20-%3E%20z25%0Afvv%20%5Blabel%3D%22fvv%20AND%22%5D%0Apjs%20-%3E%20fvv%0Avmr%20-%3E%20fvv%0Az15%20%5Blabel%3D%22z15%20XOR%22%5D%0Abbn%20-%3E%20z15%0Akhc%20-%3E%20z15%0Ambs%20%5Blabel%3D%22mbs%20OR%22%5D%0Asts%20-%3E%20mbs%0Askr%20-%3E%20mbs%0Aqgt%20%5Blabel%3D%22qgt%20AND%22%5D%0Ax30%20-%3E%20qgt%0Ay30%20-%3E%20qgt%0Abkj%20%5Blabel%3D%22bkj%20XOR%22%5D%0Ay37%20-%3E%20bkj%0Ax37%20-%3E%20bkj%0Az44%20%5Blabel%3D%22z44%20XOR%22%5D%0Anww%20-%3E%20z44%0Anfm%20-%3E%20z44%0Arvw%20%5Blabel%3D%22rvw%20AND%22%5D%0Abkg%20-%3E%20rvw%0Askg%20-%3E%20rvw%0Ahdp%20%5Blabel%3D%22hdp%20XOR%22%5D%0Ay32%20-%3E%20hdp%0Ax32%20-%3E%20hdp%0Awvr%20%5Blabel%3D%22wvr%20OR%22%5D%0Aqhs%20-%3E%20wvr%0Afwv%20-%3E%20wvr%0Ahkd%20%5Blabel%3D%22hkd%20XOR%22%5D%0Ax30%20-%3E%20hkd%0Ay30%20-%3E%20hkd%0Awpb%20%5Blabel%3D%22wpb%20AND%22%5D%0Ay44%20-%3E%20wpb%0Ax44%20-%3E%20wpb%0Aght%20%5Blabel%3D%22ght%20AND%22%5D%0Ax20%20-%3E%20ght%0Ay20%20-%3E%20ght%0Avhw%20%5Blabel%3D%22vhw%20AND%22%5D%0Ay39%20-%3E%20vhw%0Ax39%20-%3E%20vhw%0Az17%20%5Blabel%3D%22z17%20XOR%22%5D%0Adgd%20-%3E%20z17%0Afnw%20-%3E%20z17%0Afvf%20%5Blabel%3D%22fvf%20AND%22%5D%0Atjc%20-%3E%20fvf%0Aghp%20-%3E%20fvf%0Awrb%20%5Blabel%3D%22wrb%20XOR%22%5D%0Ay14%20-%3E%20wrb%0Ax14%20-%3E%20wrb%0Amjj%20%5Blabel%3D%22mjj%20AND%22%5D%0Afnw%20-%3E%20mjj%0Adgd%20-%3E%20mjj%0Az31%20%5Blabel%3D%22z31%20XOR%22%5D%0Asdf%20-%3E%20z31%0Asnd%20-%3E%20z31%0Agvm%20%5Blabel%3D%22gvm%20AND%22%5D%0Ambs%20-%3E%20gvm%0Akvv%20-%3E%20gvm%0Arhk%20%5Blabel%3D%22rhk%20AND%22%5D%0Ax31%20-%3E%20rhk%0Ay31%20-%3E%20rhk%0Az37%20%5Blabel%3D%22z37%20XOR%22%5D%0Abkj%20-%3E%20z37%0Afhq%20-%3E%20z37%0Az05%20%5Blabel%3D%22z05%20XOR%22%5D%0Amgj%20-%3E%20z05%0Abvf%20-%3E%20z05%0Adgd%20%5Blabel%3D%22dgd%20OR%22%5D%0Atrs%20-%3E%20dgd%0Agfs%20-%3E%20dgd%0Az35%20%5Blabel%3D%22z35%20XOR%22%5D%0Ahrb%20-%3E%20z35%0Apfd%20-%3E%20z35%0Akjg%20%5Blabel%3D%22kjg%20AND%22%5D%0Awrb%20-%3E%20kjg%0Adtw%20-%3E%20kjg%0Aqqn%20%5Blabel%3D%22qqn%20XOR%22%5D%0Ax11%20-%3E%20qqn%0Ay11%20-%3E%20qqn%0Az18%20%5Blabel%3D%22z18%20XOR%22%5D%0Afcw%20-%3E%20z18%0Ahrn%20-%3E%20z18%0Askr%20%5Blabel%3D%22skr%20AND%22%5D%0Ay35%20-%3E%20skr%0Ax35%20-%3E%20skr%0Avkb%20%5Blabel%3D%22vkb%20XOR%22%5D%0Ay29%20-%3E%20vkb%0Ax29%20-%3E%20vkb%0Ankg%20%5Blabel%3D%22nkg%20AND%22%5D%0Ax40%20-%3E%20nkg%0Ay40%20-%3E%20nkg%0Atrs%20%5Blabel%3D%22trs%20AND%22%5D%0Aprk%20-%3E%20trs%0Ahsj%20-%3E%20trs%0Aqbc%20%5Blabel%3D%22qbc%20AND%22%5D%0Acmd%20-%3E%20qbc%0Ajrv%20-%3E%20qbc%0Anfm%20%5Blabel%3D%22nfm%20OR%22%5D%0Agwc%20-%3E%20nfm%0Atdb%20-%3E%20nfm%0Az04%20%5Blabel%3D%22z04%20XOR%22%5D%0Aqjk%20-%3E%20z04%0Afck%20-%3E%20z04%0Az39%20%5Blabel%3D%22z39%20XOR%22%5D%0Adqm%20-%3E%20z39%0Adfw%20-%3E%20z39%0Ajwd%20%5Blabel%3D%22jwd%20AND%22%5D%0Ay21%20-%3E%20jwd%0Ax21%20-%3E%20jwd%0Atnj%20%5Blabel%3D%22tnj%20OR%22%5D%0Amvg%20-%3E%20tnj%0Acgn%20-%3E%20tnj%0A%7D

  window.solution = (ii) => U.answer(ii, (ll, p1, p2) => {
    let lls = ii.twoline
    let result
    if (1) {
      let xs = {}
      lls[0].map(ln => {
        let [k, v] = ln.split(': ')
        xs[k] = v.num
        // return [k, v.num]
      })
      let os = {}
      lls[1].map(ln => {
        let [ins, out] = ln.split(' -> ')
        let [a, op, b] = ins.split(' ')
        os[out] = {
          ins: set([a, b]),
          a, op, b,
        }
      })
      let frontier = []
      keys(xs).map(k => {
        keys(os).map(o => {
          if (os[o].ins.has(k)) {
            os[o].ins.delete(k)
            if (!os[o].ins.size) {
              frontier.push(o)
            }
          }
        })
      })
      let zs = []
      while (frontier.n) {
        let out = frontier.shift()
        let { a, op, b } = os[out]
        let result = undefined
        if (op === 'AND') result = xs[a] & xs[b]
        if (op === 'OR') result = xs[a] | xs[b]
        if (op === 'XOR') result = xs[a] ^ xs[b]
        xs[out] = result
        // L(out, result)
        if (out.startsWith('z')) zs.push(out)
        keys(os).map(o => {
          if (os[o].ins.has(out)) {
            os[o].ins.delete(out)
            if (!os[o].ins.size) {
              frontier.push(o)
            }
          }
        })
      }
      // L(xs, os)
      zs.sort().reverse()
      // L(zs)
      result = zs.map(o => xs[o]).join('')
      p1(parseInt(result, 2))
      // p1(rs.sum)
      // p1(rs.product)
    }
    if (2) {
      if (lls[1].length < 10) return
      nodes = {}
      let new_node = (key, { value, a, op, b }) => {
        nodes[key] = value !== undefined ? { value } : { a, op, b, value:undefined }
      }
      lls[0].map(ln => {
        let [k, v] = ln.split(': ')
        new_node(k, { value: k })
      })

      let outs = []
      lls[1].map(ln => {
        let [ins, out] = ln.split(' -> ')
        let [a, op, b] = ins.split(' ')
        new_node(out, { a, op, b })
        outs.push(out)
      })

      // L(nodes)

      // let x = parseInt(keys(nodes).filter(k => k.startsWith('x')).sort().reverse().map(k => nodes[k].value).join(''), 2)
      // let y = parseInt(keys(nodes).filter(k => k.startsWith('y')).sort().reverse().map(k => nodes[k].value).join(''), 2)
      // L(x, y)
      // let target = (lls[1].length < 10 ? x & y : x + y).toString(2)
      // L('target', target)
      // L('result', result)
      // let target_bits = target.split('').map(Number).reverse()
      // let result_bits = result.split('').map(Number).reverse()
      // let mismatched = target_bits.map((bit, i) => bit !== result_bits[i] ? 1 : 0).map((bit, i) => bit &&`z${i.toString().padStart(2, '0')}`).filter(truthy)
      // L('mismatched outputs', mismatched)

      let xs = keys(nodes).filter(k => k.startsWith('x')).sort()
      let ys = keys(nodes).filter(k => k.startsWith('y')).sort()
      let zs = keys(nodes).filter(k => k.startsWith('z')).sort()

      // let swappable = keys(nodes).filter(k => !k.startsWith('x') && !k.startsWith('y'))
      // L(xs, ys, swappable)
      
      let max_x = Math.pow(2, xs.length) - 1
      let max_y = Math.pow(2, ys.length) - 1
      let run = (iters=100) => {
        let mismatched_set = set()
        for (let i = 0; i < iters; i++) {
          let in_x = rand.i(max_x + 1)
          let in_y = rand.i(max_y + 1)
          let target = in_x + in_y
  
          // L('in_x', in_x, in_x.toString(2).padStart(xs.length, '0'))
          in_x_bits = in_x.toString(2).padStart(xs.length, '0').split('').map(Number).reverse()
          xs.map((k, i) => nodes[k].value = in_x_bits[i])
          // L('in_y', in_y, in_y.toString(2).padStart(ys.length, '0'))
          in_y_bits = in_y.toString(2).padStart(ys.length, '0').split('').map(Number).reverse()
          ys.map((k, i) => nodes[k].value = in_y_bits[i])
  
          let frontier = keys(nodes)
          let next = {}
          keys(nodes).map(k => {
            next[k] = new Set()
          })
          keys(nodes).map(k => {
            let { a, b } = nodes[k]
            if (a) next[a].add(k)
            if (b) next[b].add(k)
          })
          while (frontier.n) {
            let out = frontier.shift()
            let { value, a, op, b } = nodes[out]
            if (value !== undefined) continue
            let node_a = nodes[a]
            let node_b = nodes[b]
            if (node_a.value !== undefined && node_b.value !== undefined) {
              let result = undefined
              if (op === 'AND') result = node_a.value & node_b.value
              if (op === 'OR') result = node_a.value | node_b.value
              if (op === 'XOR') result = node_a.value ^ node_b.value
              nodes[out].value = result
              next[out].forEach(k => frontier.push(k))
            }
          }
  
          let actual = parseInt(zs.map(k => nodes[k].value).reverse().join(''), 2)
          // L(target.toString(2).padStart(zs.length, '0'))
          // L(actual.toString(2).padStart(zs.length, '0'))
  
          let target_bits = target.toString(2).padStart(zs.length, '0').split('').map(Number).reverse()
          let actual_bits = actual.toString(2).padStart(zs.length, '0').split('').map(Number).reverse()
          let mismatched = target_bits.map((bit, i) => bit !== actual_bits[i] ? 1 : 0).map((bit, i) => bit &&`z${i.toString().padStart(2, '0')}`).filter(truthy)
          // L('mismatched outputs', mismatched)
          mismatched.map(k => mismatched_set.add(k))

          keys(nodes).map(k => {
            nodes[k].value = undefined
          })

          // hardcoded
          // if (iters > 100 && i === iters - 1 && mismatched_set.n < 34) i--
        }

        return mismatched_set
      }
      let best = (swapped) => {
        let best_mismatched_set
        let k_set = set(swapped)
        let first = k_set.ar.combine(2)
        let seen = set()
        for (let [a, b] of first) {
          k_set.delete(a)
          k_set.delete(b)
          let l1 = [a, b]
          let second = k_set.ar.combine(2)
          for (let [a, b] of second) {
            k_set.delete(a)
            k_set.delete(b)
            let l2 = [a, b]
            let third = k_set.ar.combine(2)
            for (let [a, b] of third) {
              k_set.delete(a)
              k_set.delete(b)
              let l3 = [a, b]
              let fourth = k_set.ar.combine(2)
              for (let [a, b] of fourth) {
                let l4 = [a, b]
                let l = [l1, l2, l3, l4]
                if (seen.had(l.key)) continue
  
                l.map(([a, b]) => {
                  ;[outs[a], outs[b]] = [outs[b], outs[a]]
                })
  
                let mismatched_set = run()
                if (!best_mismatched_set || mismatched_set.n < best_mismatched_set.n) {
                  best_mismatched_set = mismatched_set
                }
                
                l.map(([a, b]) => {
                  ;[outs[a], outs[b]] = [outs[b], outs[a]]
                })
              }
              k_set.add(a)
              k_set.add(b)
            }
            k_set.add(a)
            k_set.add(b)
          }
          k_set.add(a)
          k_set.add(b)
        }
        return best_mismatched_set
      }



      /*
      SOLUTION
      */
      let swaps = [
        ['fgc', 'z12'],
        ['mtj', 'z29'],
        ['dgr', 'vvm'],
        ['dtv', 'z37'],
      ]
      swaps.map(swap => {
        let [a, b] = swap
        ;[nodes[a], nodes[b]] = [nodes[b], nodes[a]]
      })

      let mismatched_set = run(100_000)
      L(mismatched_set.n)

      // L('all mismatched', mismatched_set.ar.sort())
      let swappable = set()
      {
        let frontier = [...mismatched_set]
        while (frontier.n) {
          let out = frontier.shift()
          if (swappable.had(out)) continue
          let { a, op, b } = nodes[out]
          if (a && b) {
            frontier.push(a)
            frontier.push(b)
          }
        }
      }
      let non_mismatched = keys(nodes).filter(k => (k.startsWith('z') && !mismatched_set.has(k)) || k.startsWith('x') || k.startsWith('y'))
      {
        let frontier = [...non_mismatched]
        while (frontier.n) {
          let out = frontier.shift()
          swappable.delete(out)
          let { a, op, b } = nodes[out]
          if (a && b) {
            frontier.push(a)
            frontier.push(b)
          }
        }
      }
      L('swappable', swappable.n, '/', keys(nodes).n)
      // L(swappable.ar)

      // let frontier = new PQN(x => x.mismatched)
      // let explored = set()
      // let swapped = swappable.ar.slice(0, 8)
      // frontier.push({ swapped })
      // while (frontier.n) {
      //   let { swapped } = frontier.pop()
      //   let key = swapped.sort().join(',')
      //   if (explored.had(key)) continue
      //   let mismatched_set = best(swapped)
      //   L(key, mismatched_set.n)
      //   if (mismatched_set.n === 0) {
      //     p2(key)
      //     break
      //   }
      //   let taken = set(swapped)
      //   let next = swappable.ar.filter(k => !taken.has(k))
      //   swapped.map((k, i) => {
      //     let next_swapped = swapped.slice()
      //     next.map((nk) => {
      //       next_swapped[i] = nk
      //       frontier.push({ swapped: next_swapped, mismatched: mismatched_set.n })
      //     })
      //   })
      // }

      // let viz = []
      // keys(nodes).map(k => {
      //   let { a, op, b, value } = nodes[k]
      //   // if (value !== undefined) {
      //   //   viz.push(`${k} = ${value}`)
      //   // } else {
      //   //   viz.push(`${k} = ${a} ${op} ${b}`)
      //   //   viz.push(`${a} -> ${k}`)
      //   //   viz.push(`${b} -> ${k}`)
      //   // }
      //   if (a && b) {
      //     viz.push(`${k} [label="${k} ${op}"]`)
      //     if (mismatched_set.has(k)) {
      //       viz.push(`${k} [color=red]`)
      //     } else if (swappable.has(k)) {
      //       viz.push(`${k} [color=blue]`)
      //     }
      //     viz.push(`${a} -> ${k}`)
      //     viz.push(`${b} -> ${k}`)
      //   }
      // })
      // viz.unshift('digraph G {')
      // viz.push('}')
      // fs.writeFileSync('working/viz.txt', viz.join('\n'))

      p2(swaps.flatMap(x=>x).sort().join(','))
    }
  })

  const l = console.log, L = l
  const U = {
    opt: (val, func) => func ? func(val) : val,
    apply: (val, func) => func(val),
    use: (val, func) => { func(val); return val; },
    o: (field, value) => ({ [field]: value }),
    k: (ob, func) => U.opt(Object.keys(ob), func),
    v: (ob, func) => U.opt(Object.values(ob), func),
    e: (ob, func) => U.opt(Object.entries(ob), func),
    f: (ar) => Object.fromEntries(ar),
    a: (o, f=x=>x) => Array.from(o).map(f),
    an: (n, f=x=>x) => Array.from({ length: n }).map(f),
    stringish: (o) => typeof o === 'string' || o instanceof String,
    n: (o) => U.stringish(o) ? Number(o) : U.a(o).map(Number),
    list: (str, sep) => U.stringish(str) ? str.split(sep || ' ') : Array.from(str),
    set: (str, sep) => new Set(U.list(str, sep)),
    merge: obs => Object.assign({}, ...obs),
    omap: (ob, func) => Object.entries(ob).map(entry => func(...entry)),
    i: (ar, i) => (i < 0) ? ar[ar.length + i] : ar[i],
    wrap: (ar, i) => ar[(ar.length + i) % ar.length],
    numsort: (ar, func = Number) => ar.sort((a, b) => func(a) - func(b)),
    maxxing: (xs, f=x=>x) => {
      if (!xs.length) return undefined
      let max_i = 0, max_value = f(xs[0])
      for (let i = 1; i < xs.length; i++) {
        const value = f(xs[i])
        if (value > max_value) {
          max_i = i
          max_value = value
        }
      }
      return xs[max_i]
    },
    minning: (xs, f=x=>x) => {
      if (!xs.length) return undefined
      let min_i = 0, min_value = f(xs[0])
      for (let i = 1; i < xs.length; i++) {
        const value = f(xs[i])
        if (value < min_value) {
          min_i = i
          min_value = value
        }
      }
      return xs[min_i]
    },
    group: (xs, n) => {
      const groups = []
      for (let i = 0; i < xs.length; i += n) {
        groups.push(xs.slice(i, Math.min(xs.length, i + n)))
      }
      return groups
    },
    sum: (ar, func) => ar.reduce((sum, val) => sum + U.opt(val, func), 0),
    product: (ar, func) => ar.reduce((prod, val) => prod * U.opt(val, func), 1),
    match: (strs, regex, func) => strs.map(str => U.opt(str.match(regex), func)),
    rs: (re, str) => {
      if (re.global) return Array.from(str.matchAll(re))
      return re.exec(str)
    },
    union: (a, b) => new Set(...a, ...b),
    splice: (ar, i, nX, ...items) => U.use(ar.slice(), copy => copy.splice(i, nX, ...items)),
    wrap: (i, n) => (i % n + n) % n,
    range: (start, stop, step) => {
      if (step === undefined) step = 1;
      if (stop === undefined) [stop, start] = [start, 0];
      return Array.from({ length: stop - start }, (_, i) => i * step + start);
    },
    count: ar => U.use({}, counts => ar.map(e => { counts[e] = 1 + (counts[e] || 0); })),
    diff: ar => ar.slice(1).map((val, i) => val - ar[i]),
    clone: (ob) => JSON.parse(JSON.stringify(ob)),
    manhat: (a, b) => {
      if (a.x !== undefined) return Math.abs(a.x - b.x) + Math.abs(a.y - b.y)
      return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
    },
    array: (length, func = () => 0) => Array.from({ length }).map((_, i) => func(i)),
    memoed: (func) => {
      const memo = {}
      return (...args) => {
        let key = args.key
        if (memo[key] !== undefined) return memo[key]
        return memo[key] = func(...args)
      }
    },
    answer: (input, func) => U.use({}, answers => func(input.split('\n'), ...['1', '2'].map(pN => aN => { l(pN, aN); answers[pN] = aN; }))),
  }
  const keys = U.k, K = keys
  const values = U.v, V = values
  const entries = U.e, E = entries
  const from = U.f, F = from
  const range = U.range, R = range
  const sum = U.sum
  const product = U.product
  const max = U.maxxing
  const min = U.minning
  const A = U.a
  const An = U.an
  const NU = U.n
  const MA = U.match
  const RS = U.rs
  window.U = U

  const vec = class {
    constructor(x, y) {
      if (Array.isArray(x)) {
        ;[x, y] = x
      }
      this.x = x
      this.y = y
    }
    get 0() { return this.x } set 0(x) { this.x = x }
    get 1() { return this.y } set 1(y) { this.y = y }

    static of = (x, y) => new vec(x, y)
    static from = (ob) => new vec(ob.x, ob.y)

    add(v) { return vec.of(this.x + v.x, this.y + v.y) }
    sub(v) { return vec.of(this.x - v.x, this.y - v.y) }
    mul(v) { return vec.of(this.x * v.x, this.y * v.y) }
    div(v) { return vec.of(this.x / v.x, this.y / v.y) }
    mod(v) { return vec.of(this.x % v.x, this.y % v.y) }
    abs() { return vec.of(Math.abs(this.x), Math.abs(this.y)) }
    dist(v) { return Math.hypot(this.x - v.x, this.y - v.y) }
    manhat(v=undefined) {
      if (v) return Math.abs(this.x - v.x) + Math.abs(this.y - v.y)
      return Math.abs(this.x) + Math.abs(this.y)
    }
    equal(v) { return this.x === v.x && this.y === v.y }
    rotate(angle) { return vec.of(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle)) }
    scale(s) { return vec.of(this.x * s, this.y * s) }
    dot(v) { return this.x * v.x + this.y * v.y }
    cross(v) { return this.x * v.y - this.y * v.x }
    proj(v) { return v.scale(this.dot(v) / v.dot(v)) }
    get length() { return Math.hypot(this.x, this.y) } get n() { return this.length }
    get angle() { return Math.atan2(this.y, this.x) }
    get unit() { return this.div(vec.of(this.length, this.length)) } get norm() { return this.unit }
    get neg() { return vec.of(-this.x, -this.y) }
    get right() { return vec.of(-this.y, this.x) }
    get left() { return vec.of(this.y, -this.x) }
    get clone() { return vec.of(this.x, this.y) }
    get key() { return this.x + ',' + this.y }
    get str() { return this.key }
    get ar() { return [this.x, this.y] }

    static _d4 = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    static _d8 = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]]
    get n4() { return vec._d4.map(([dx, dy]) => this.add(vec.of(dx, dy))) }
    get n8() { return vec._d8.map(([dx, dy]) => this.add(vec.of(dx, dy))) }
  }
  const ve = vec.of

  const {
    PriorityQueue: PQ,
    MinPriorityQueue: PQN,
    MaxPriorityQueue: PQX,
  } = require('@datastructures-js/priority-queue')
  ;[PQ.prototype, PQN.prototype, PQX.prototype].map(pqp => {
    Object.defineProperties(pqp, {
      n: { get() { return this.size() } },
      empty: { get() { return this.isEmpty() } },
    
      peek: { value() { return this.front() } },
    })
  })
  const crypto = require('crypto')
  U.md5 = (str) => crypto.createHash('md5').update(str).digest('hex')

  Object.defineProperties(Array.prototype, {
    n: { get() { return this.length } },
    num: { get() { return U.n(this) } },
    numsort: { get() { return U.numsort(this.num) } },
    sum: { get() { return U.sum(this) } },
    product: { get() { return U.product(this) } },
    first: { get() { return this[0] } },
    last: { get() { return this[this.n - 1] } },
    truthy: { get() { return this.filter(x => x) } },
    defined: { get() { return this.filter(x => x !== undefined) } },
    min: { get() { return min(this) } },
    max: { get() { return max(this) } },
    key: { get() { return this.join(',') } },
    str: { get() { return this.join('') } },
    set: { get() { return new Set(this) } },
    ve: { get() { return ve(this) } },
    ves: { get() { return this.map((x) => ve(typeof x === 'string' ? x.split(',').num : x)) } },
    
    i: { value(i) { return U.i(i) } },
    is: { value(i, x) { return this.i(i) === x } },
    m: { value(f) { return this.map(f) } },
    s: { value(...xs) { return this.slice(...xs) } },
    f: { value(f) { return this.filter(f) } },
    fs: { value(...fs) { return this.map((x, i) => fs[i] ? fs[i](x) : x) } },
    group: { value(n) { return U.group(this, n) } },
    count: { value() { return U.count(this) } },
    diff: { value() { return U.diff(this) } },
    maxxing: { value(f) { return max(this, f) } },
    minning: { value(f) { return min(this, f) } },
    take: { value(f, eval=y=>y) {
      let first = undefined
      this.some((...args) => {
        const y = f(...args)
        if (eval(y)) first = y
      })
      return first
    } },
    takedefined: { value(f) { return this.take(f, y => y !== undefined) } },
    obmap: { value(ob) { return this.map(x => ob[x]) } },
    kmap: { value(key) { return this.map(x => x[key]) } },

    aget: { value(i) { return this[i] } },
    aset: { value(i, x) { this[i] = x } },
    
    grid: { value(outofbounds=undefined) {
      this.outofbounds = outofbounds
      for (let i = 0; i < this.n; i++) {
        if (!Array.isArray(this[i])) this[i] = Array.from(this[i])
      }
      return this
    } },
    gnrows: { get() { return this.n } },
    gncols: { get() { return this[0].n } },
    grows: { get() { return this } },
    gcols: { get() { return this[0].map((_, i) => this.map(row => row[i])) } },
    ginside: { value(v) { return this[v.y] && v.x >= 0 && v.x < this[0].n } },
    gget: { value(v) { return this.ginside(v) ? this[v.y][v.x] : this.outofbounds } },
    gset: { value(v, c) { if (this.ginside(v)) this[v.y][v.x] = c } },
    gfor: { value(f) { this.forEach((line, y) => line.forEach((c, x) => f(c, x, y, this))) } },
    gmap: { value(f) { return this.map((line, y) => line.map((c, x) => f(c, x, y, this))).grid(this.outofbounds) } },
    gtake: { value(f, eval=undefined) { return this.take((line, y) => line.take((c, x) => f(c, x, y, this), eval), x => x !== undefined) } },
    gvfor: { value(f) { this.gfor((c, x, y) => f(c, ve(x, y))) } },
    gvmap: { value(f) { return this.gmap((c, x, y) => f(c, ve(x, y))) } },
    gvtake: { value(f, eval=undefined) { return this.gtake((c, x, y) => f(c, ve(x, y)), eval) } },
    gvof: { value(f) { return this.gvtake((c, v) => f(c, v) && v, x => !!x) } },
    gvsof: { value(f) {
      const vs = []
      this.gvfor((c, v) => f(c, v) && vs.push(v))
      return vs
    } },
    gsub: { value(v, s, new_outofbounds=this.outofbounds) { return this.slice(v.y, v.y + s.y).map(line => line.slice(v.x, v.x + s.x)).grid(new_outofbounds) } },
    gadj: { value(v, d4=true) { return (d4 ? vec._d4 : vec._d8).map(([dx, dy]) => v.add(ve(dx, dy))).filter(v => this.ginside(v) || this.outofbounds) } },
    gd4: { value(v) { return this.gadj(v, true) } },
    gd8: { value(v) { return this.gadj(v, false) } },
    gclone: { value() { return this.map(line => line.clone).grid(this.outofbounds) } },

    vary: { value(n) {
      const result = []
      const recurse = (prefix) => {
        if (prefix.n === n) return result.push(prefix)
        for (let i = 0; i < this.n; i++) {
          recurse(prefix.clone.concat([this[i]]))
        }
      }
      recurse([])
      return result
    } },
    permute: { value(n) {
      const result = []
      const recurse = (prefix, used) => {
        if (prefix.n === n) return result.push(prefix)
        for (let i = 0; i < this.n; i++) {
          if (used.has(i)) continue
          used.add(i)
          recurse(prefix.clone.concat([this[i]]), used)
          used.delete(i)
        }
      }
      recurse([], new Set())
      return result
    } },
    combine: { value(n) {
      const result = []
      const recurse = (prefix, start) => {
        if (prefix.n === n) return result.push(prefix)
        for (let i = start; i < this.n; i++) {
          recurse(prefix.clone.concat([this[i]]), i + 1)
        }
      }
      recurse([], 0)
      return result
    } },
  })
  Array.d4 = () => [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]
  Array.d8 = () => [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
  ]

  Object.defineProperties(String.prototype, {
    n: { get() { return this.length } },
    num: { get() { return U.n(this) } },
    list: { get() { return U.list(this) } },
    set: { get() { return U.set(this) } },
    a: { get() { return U.a(this) } }, ar: { get() { return this.a } },
    twoline: { get() { return this.split('\n\n').map(group => group.split('\n')) } },
    ord: { get() { return this.charCodeAt(0) } },
    ordlower: { get() { return this.ord - 'a'.ord } },
    ordupper: { get() { return this.ord - 'A'.ord } },
    ve: { get() { return ve(this.split(',').num) } },
    
    i: { value(i) { return U.i(this, i) } },
    is: { value(i, c) { return this.i(i) === c } },
    s: { value(...xs) { return this.slice(...xs) } },
    nums: { value(splitter) { return U.n(splitter ? this.split(splitter) : this) } },
    re: { value(re) { return U.rs(re, this) } },
    refs: { value(re, ...fs) {
      const result = U.rs(re, this)
      const apply = (match) => Array.from(match).slice(1).map((x, i) => fs[i](x))
      return re.global ? result.map(apply) : apply(result)
    } },
    code: { value(i) { return this.charCodeAt(i) } },
    codelower: { value(i) { return this.code(i) - 'a'.ord } },
    codeupper: { value(i) { return this.code(i) - 'A'.ord } },
    group: { value(n) { return this.ar.group(n).map(group => group.join('')) } },
    
    vary: { value(n) {
      if (!this._memo_vary) this._memo_vary = {}
      if (this._memo_vary[n]) return this._memo_vary[n].clone

      const result = set()
      const recurse = (prefix) => {
        if (prefix.length === n) return result.add(prefix)
        for (let i = 0; i < this.n; i++) {
          recurse(prefix + this[i])
        }
      }
      recurse('')

      return (this._memo_vary[n] = result.ar).clone
    } },
    permute: { value(n) {
      if (!this._memo_permute) this._memo_permute = {}
      if (this._memo_permute[n]) return this._memo_permute[n].clone

      const result = set(), used = set()
      const recurse = (prefix) => {
        if (prefix.length === n) return result.add(prefix)
        for (let i = 0; i < this.n; i++) {
          if (used.has(this[i])) continue
          used.add(this[i])
          recurse(prefix + this[i])
          used.delete(this[i])
        }
      }
      recurse('')

      return (this._memo_permute[n] = result.ar).clone
    } },
    combine: { value(n) {
      if (!this._memo_combine) this._memo_combine = {}
      if (this._memo_combine[n]) return this._memo_combine[n].clone

      const result = set()
      const recurse = (prefix, start) => {
        if (prefix.length === n) return result.add(prefix)
        for (let i = start; i < this.n; i++) {
          recurse(prefix + this[i], i + 1)
        }
      }
      recurse('', 0)

      return (this._memo_combine[n] = result.ar).clone
    } },
  })

  Object.defineProperties(Number.prototype, {
    repeat: { value(n) { return An(n).fill(Number(this)) } },
    bin: { get() { return this.toString(2) } },
    str: { get() { return String(this) } },
    chr: { get() { return String.fromCharCode(this) } },
    chrlower: { get() { return String.fromCharCode(this + 'a'.code) } },
    chrupper: { get() { return String.fromCharCode(this + 'A'.code) } },
    floor: { get() { return Math.floor(this) } },
    ceil: { get() { return Math.ceil(this) } },
    round: { get() { return Math.round(this) } },
    abs: { get() { return Math.abs(this) } },

    to: { value(end, step=1) { return R(this, end, step) } },
    fixed: { value(n) { return this.toFixed(n) } },
  })

  Object.defineProperties(Set.prototype, {
    n: { get() { return this.size } },
    a: { get() { return Array.from(this) } }, ar: { get() { return this.a } },
    str: { get() { return Array.from(this).join('') } },
    
    had: { value(x) {
      const had = this.has(x)
      this.add(x)
      return had
    } },
    added: { value(x) { return !this.had(x) } },
    deleted: { value(x) {
      const deleted = this.has(x)
      this.delete(x)
      return deleted
    } },
  })

  Object.defineProperties(Object.prototype, {
    // keys: { get() { return K(this) } },
    // values: { get() { return V(this) } },
    // entries: { get() { return E(this) } },
    // okey: { get() { return this.entries.map(e => e.join(':')).join(',') } },
    clone: { get() { return strings.json.clone(this) } },
    
    // omap: { value(f) { return U.omap(this, f) } },
    // eq: { value(ob) { return this.keys.length === ob.keys.length && this.keys.every(k => this[k] === ob[k]) } },
    // concat: { value(ob) { return { ...this, ...ob } } },
  })

  
  // from https://freshman.dev/lib/2/common/script.js
  window.pass = x=>x
  window.exists = x=>x!==undefined
  window.truthy = x=>!!x
  window.apply = (f, ...x) => typeof f === 'function' ? f(...x) : f
  window.compose = (...fs) => (...x) => fs.slice(1).reduce((v, fs) => f(v), funcs[0] && funcs[0](...args))
  window.pipe = (value, ...funcs) => compose(...funcs)(value)
  window.fs = (x) => {
      return {
          pipe: (f) => fs(f(x)),
          with(f) { f(x); return this },
          x, value:x,
      }
  }
  window.fnot = (f) => !apply(f)

  window.list = (data=[], seperator=' ') => typeof(data) === 'string' ? data.split(seperator) : Array.from(data)
  window.set = (data=[], seperator=' ') => new Set(list(data, seperator))
  window.lists = {
      of: list,
      remove: (xs, x) => {
          const i = xs.indexOf(x)
          if (i > -1) xs.splice(i, 1)
          return xs
      },
      clear: (xs) => {
          xs.splice(0, xs.length)
          return xs
      },
      joins: (xs, ...separators) => (separators.length === 1 ? xs : xs.map(x => lists.joins(x, ...separators.slice(1)))).join(separators[0]),
      order: (xs, is) => is.map(i => xs[i]),
      
      first: (xs, n) => n === undefined ? xs[0] : xs.slice(0,n),
      last: (xs, n) => n === undefined ? xs.at(-1) : xs.slice(n-1),

      across_defined: (...xs) => {
          const result = Array.from({ length: Math.max(...xs.map(x => x.length)) })
          for (let i = 0; i < result.length; i++) {
              const first_for_i = xs.find(x => defined(x[i]))
              result[i] = first_for_i && first_for_i[i]
          }
          return result
      },
      across_truthy: (...xs) => {
          const result = Array.from({ length: Math.max(...xs.map(x => x.length)) })
          for (let i = 0; i < result.length; i++) {
              const first_for_i = xs.find(x => truthy(x[i]))
              result[i] = first_for_i && first_for_i[i]
          }
          return result
      },

      group: (xs, n) => {
          const groups = []
          for (let i = 0; i < xs.length; i += n) {
              groups.push(xs.slice(i, Math.min(xs.length, i + n)))
          }
          return groups
      },

      under: (xs, f) => {
          return xs.filter(f).length
      },

      unique: (xs, f=x=>x) => {
          const value_set = set()
          return xs.filter(x => {
              const value = f(x)
              if (value_set.has(value)) return false
              value_set.add(value)
              return true
          })
      },

      find_indices: (xs, x, f=pass) => {
          const indices = []
          for (let i = 0; i < xs.length; i++) {
              if (f(xs[i]) === x) {
                  indices.push(i)
              }
          }
          return indices
      },

      maxxing: (xs, f) => {
          if (!xs.length) return undefined
          let max_i = 0, max_value = f(xs[0])
          for (let i = 1; i < xs.length; i++) {
              const value = f(xs[i])
              if (value > max_value) {
                  max_i = i
                  max_value = value
              }
          }
          return xs[max_i]
      },
      minning: (xs, f) => {
          if (!xs.length) return undefined
          let min_i = 0, min_value = f(xs[0])
          for (let i = 1; i < xs.length; i++) {
              const value = f(xs[i])
              if (value < min_value) {
                  min_i = i
                  min_value = value
              }
          }
          return xs[min_i]
      },
      maxxing_list: (xs, f) => {
          if (!xs.length) return []
          let max_is = [0], max_value = f(xs[0])
          for (let i = 1; i < xs.length; i++) {
              const value = f(xs[i])
              const diff = value - max_value
              if (diff > 0) {
                  max_is = [i]
                  max_value = value
              }
              else if (diff === 0) {
                  max_is.push(i)
              }
          }
          return max_is.map(max_i => xs[max_i])
      },
      minning_list: (xs, f) => {
          if (!xs.length) return []
          let min_is = [0], min_value = f(xs[0])
          for (let i = 1; i < xs.length; i++) {
              const value = f(xs[i])
              const diff = value - min_value
              if (diff < 0) {
                  min_is = [i]
                  min_value = value
              }
              else if (diff === 0) {
                  min_is.push(i)
              }
          }
          return min_is.map(min_i => xs[min_i])
      },

      count: (ar, sep=' ') => {
          const result = {}
          list(ar, sep).map(x => { result[x] = 1 + (result[x] || 0) })
          return result
      },
      count_sort: (ar, sep=' ') => entries(lists.count(ar, sep)).sort((a,b) => b[1] - a[1]),

      objectable: (data='', seperator=' ') => {
          const _objectable = (x) => {
              x._keys = x._keys ?? x
              // Object.defineProperty(x, 'object', {
              //     get: function() {
              //         if (!this._keys) throw 'objectable(array) required'
              //         return from(zip(this._keys, this))
              //     }
              // })
              return x
          }
          const Objectable = class extends Array {
              constructor(...x) {return _objectable(super(...x))}
              // map(...x) {return _objectable(Object.assign(super.map.apply(this, x), {_keys:this._keys||this}))}
              map(...x) {return Object.assign(super.map.apply(this, x), {_keys:this._keys||this})}
              filter(...x) {return _objectable(super.filter.apply(this, x))}
              slice(...x) {return _objectable(super.slice.apply(this, x))}
              get object() {
                  if (!this._keys) throw 'objectable(array) required'
                  return from(zip(this._keys, this))
              }
          }
          return new Objectable(...list(data, seperator))
      },
      init_object: (xs) => objectable(xs),
      finalize_object: (xs) => {
          const result = xs.object
          if (!xs._keys || !result) throw 'init_object(array) required'
          return result
      }
  }
  window.zip = (...x) => Array.from(x[0]).map((_,i) => x.map(y => y[i]??undefined))
  window.named = (keys=[], values=[], sep=' ') => {
      return from(zip(list(keys, sep), list(values, sep)))
  }
  window.object = (data='', seperator=' ') => from(
      typeof data !== 'object' || Array.isArray(data) 
      ? list(data, seperator).map(x => [x, true])
      : entries(data))

  window.bounds = (ar) => (x => {x.push(x[1]-x[0]);return x})([Math.min(...ar), Math.max(...ar)])
  window.bound = (ar, x) => (([min, max]) => Math.max(min, Math.min(x, max)))(bounds(ar))
  window.norm = (ar, x) => (([min, max]) => (bound(ar, x) - min) / (max - min))(bounds(ar))
  window.maths = window.math = {
      TAU: 2 * Math.PI, PI: Math.PI,
      max: (ar) => Math.max(...ar),
      min: (ar) => Math.min(...ar),
      sum, product,
      lerp: (a, b, p) => {
          p = Math.max(0, Math.min(p, 1))
          return (1 - p) * a + p * b
      },
      round: (x, pr=0) => {
          const round = Math.pow(10, pr)
          return Math.round(x * round) / round
      },
      cmp: {
          mod: {
              descending: (f) => (...x) => -f(...x),
          },
          numeric: (a, b) => a - b,
      }
  }

  window.pick = (object, delimited_keys, delimiter=' ') => list(delimited_keys, delimiter).reduce((o, k) => {
      if (object.hasOwnProperty(k)) {
          o[k] = object[k]
      }
      return o
  }, {})
  window.unpick = (object, delimited_keys, delimiter=' ') => list(delimited_keys, delimiter).reduce((o, k) => { delete o[k]; return o }, {...object})

  window.merge = (...os) => {
      const result = {}
      os.map(o => {
          Object.keys(o||{}).map(k => {
              if (o[k] === undefined) delete result[k]
              else result[k] = (typeof(result[k]) === 'object' && typeof(o[k]) === 'object' && !Array.isArray(o[k])) ? merge(result[k], o[k]) : o[k]
          })
      })
      return result
  }
  window.transmute = (o, O, X=undefined) => {
      // recursively transform object with functions
      const resolved = Object.keys(o).map(k =>
          (typeof(o[k]) === 'object' && !Array.isArray(o[k]))
          ? { [k]: transmute(o[k], O) }
          : X
              ? { [k]: X(o[k]) }
              : O(k, o[k]))
      
      return merge(
          {},
          ...resolved
      )
  }

  window.string = {
      digits: range(10).join(''),
      lower: range(26).map(i => String.fromCharCode(i + 'a'.charCodeAt(0))).join(''),
      get upper() { return string.lower.toUpperCase() },

      get lowerhex() { return string.digits + string.lower.slice(0, 6) },
      get upperhex() { return string.digits + string.upper.slice(0, 6) },
      get lowernum() { return string.lower + string.digits },
      get uppernum() { return string.upper + string.digits },

      get alpha() { return string.lower },
      get alphanum() { return string.alpha + string.digits },
      get hex() { return string.digits + string.alpha.slice(0, 6) },

      get unambiguous() { return '23456789ABCDEFGHJKMNPQRSTUVWXYZ' },
      get somebiguous() { return string.digits + 'ABCDEFGHJKMNPQRSTUVWXYZ' },
      unsomebiguate(x) { return x.replace(/o/gi, '0').replace(/[il]/gi, '1') },
      
      get anycase() { return string.lower + string.upper },
      get anycasenum() { return string.anycase + string.digits },
      get base62() { return string.digits + string.anycase },

      prefix(...x) {
          if (x.length === 1) return x[0]
          if (x.length === 2) {
              for (let i = 0;; i++) {
                  if (x[0][i] !== x[1][i]) return x[0].slice(0, i)
                  if (i === x[0].length || i === x[1].length) return x[0]
              }
          }
          return x.reduce((p,x)=>string.prefix(p, x))
      },
  }
  window.strings = Object.assign({}, string, {
      json: {
          parse: JSON.parse,
          stringify: JSON.stringify,
          pretty: (object) => JSON.stringify(object, null, 2),
          equal: (a, b) => JSON.stringify(a) === JSON.stringify(b), eq:(...x)=>strings.json.equal(...x),
          clone: (x) => JSON.parse(JSON.stringify(x)),
      },
      plural: (count, prefix, plural_suffix, singular_suffix='') => {
          return prefix + (count === 1 ? singular_suffix : plural_suffix)
      },
  })
  window.compare = {
      stringify: (...xs) => {
          const stringified = xs.map(JSON.stringify)
          return stringified.slice(1).findIndex(x => x !== stringified[0]) === -1
      },
  }

  window.rand = merge({
      // () => [0,1)
      // (n) => [0,n)
      // (a, b) => [a,b)
      f: (a=1,o,e=1) => (i => i*e + (o===undefined?0:a))(Math.random() * ((o===undefined?a:o-a)/e)),
      s: (a=1,o,e=1) => (i => i*e + (o===undefined?0:a) - ((o===undefined?a:o-a)/e))(Math.random() * 2 * ((o===undefined?a:o-a)/e)),
      i: (a=2,o,e=1) => Math.floor(rand.f(a,o,e)),
      generate: (n, method, constraint) => {
          let samples = new Array(n)
          do {
              for (let i = 0; i < n; i++) samples[i] = method(i)
          } while (!constraint(...samples))
          return samples
      },
      sample: (ar, n=undefined) => n === undefined ? ar[rand.i(ar.length)] : range(n).map(() => rand.sample(ar)),
      pick: (ar, n=undefined) => n === undefined ? ar.splice(rand.i(ar.length), 1)[0] : range(n).map(() => rand.pick(ar)),
      weighted: (o, n=undefined) => {
          const total = math.sum(Object.values(o))
          let picks
          for (let i = 0; i < n||1; i++) {
              let x = rand.f(total)
              const pick = Object.keys(o).find(k => {
                  x -= o[k]
                  return x <= 0
              })

              if (n === undefined) return pick
              picks = picks || []
              picks.push(pick)
          }
          return picks
      },
      shuffle_order: (n) => range(n.length ?? n).sort(() => rand.s()),
      shuffle: (ar) => ar.sort(() => rand.s()),
      shuffle_and_order: (ar) => {
          const order = rand.shuffle_order(ar.length)
          return {
              shuffle: lists.order(ar, order),
              order,
          }
      },
  }, transmute(string, false, x => (n=1) => range(n).map(i => rand.sample(x)).join('')), {
      hex: (n) => Math.floor(Math.random() * Math.pow(16, n)).toString(16).padStart(n, '0'),
  })
})()
module.exports = solution