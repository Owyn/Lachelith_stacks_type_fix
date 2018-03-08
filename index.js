// 97000033	ASpd	DOT	True	perc	60000	0	1.1	Lakan's Might			Each stack increases Attack Speed by $H_W_GOOD10%$COLOR_END.	icon_status.plusciriticalresist_tex	icon_status.plusciriticalresist_tex	True

// 46753	StackCounter	Buff	True	seta	10000	0	46751	Shriek			When stacked, produces Hardened Bark.	icon_status.angerwarrior_tex	icon_status.angerwarrior_tex	True


module.exports = function Lachelith_stacks_type_fix(d) {
	
	function aHook(event)
	{
		if (event.id == 97000033) 
		{
			event.id = 46753;
			return true;
		}
	}

	dispatch.hook('S_ABNORMALITY_BEGIN', 2, aHook)
	dispatch.hook('S_ABNORMALITY_REFRESH', 1, aHook)
	dispatch.hook('S_ABNORMALITY_END', 1, aHook)

}
