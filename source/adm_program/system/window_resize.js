/******************************************************************************
 * Fenstergroeße an Inhalt anpassen
 *
 * Copyright    : (c) 2004 - 2007 The Admidio Team
 * Homepage     : http://www.admidio.org
 * Module-Owner : Jochen Erkens
 *
 ******************************************************************************
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 *
 *****************************************************************************/
 

function windowresize()
{
	if(document.all)
	{
		breite = self.document.body.scrollWidth;
		hoehe  = self.document.body.scrollHeight+80;
	}
	
	else
	{
		breite = self.document.body.offsetWidth;
		hoehe  = self.document.body.offsetHeight+80;
	}
	window.resizeTo(breite,hoehe);
}
